import Stripe from 'stripe';
import { authOptions } from '@/libs/auth';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { getRoom } from '@/libs/apis';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('Missing STRIPE_SECRET_KEY in environment variables');
}

// Explicitly cast the API version to the correct type
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-08-16' as Stripe.LatestApiVersion, // Cast to the appropriate type
});

type RequestData = {
  checkinDate: string;
  checkoutDate: string;
  adults: number;
  children?: number; // Optional field
  numberOfDays: number;
  hotelRoomSlug: string;
};

export async function POST(req: Request) {
  try {
    const {
      checkinDate,
      checkoutDate,
      adults,
      children,
      hotelRoomSlug,
      numberOfDays,
    }: RequestData = await req.json();

    if (!checkinDate || !checkoutDate || !adults || !hotelRoomSlug || !numberOfDays) {
      return NextResponse.json(
        { error: 'All required fields must be provided' },
        { status: 400 }
      );
    }

    const origin = req.headers.get('origin') || new URL(req.url).origin;

    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const userId = session.user.id;
    const formattedCheckoutDate = checkoutDate.split('T')[0];
    const formattedCheckinDate = checkinDate.split('T')[0];

    const room = await getRoom(hotelRoomSlug);
    const discountPrice = room.price - (room.price / 100) * room.discount;
    const totalPrice = discountPrice * numberOfDays;

    const stripeSession = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: 'ngn',
            product_data: {
              name: room.name,
              images: room.images.map((image: { url: string }) => image.url),
            },
            unit_amount: Math.round(totalPrice * 100),
          },
        },
      ],
      payment_method_types: ['card'],
      success_url: `${origin}/users/${userId}`,
      metadata: {
        adults,
        children: children || 0,
        checkinDate: formattedCheckinDate,
        checkoutDate: formattedCheckoutDate,
        hotelRoom: room._id,
        numberOfDays,
        user: userId,
        discount: room.discount,
        totalPrice,
      },
    });

    return NextResponse.json(stripeSession, {
      status: 200,
      statusText: 'Payment session created',
    });
  } catch (error) {
    if (error instanceof Stripe.errors.StripeError) {
      console.error('Stripe error:', error.message);
      return NextResponse.json(
        { error: `Stripe error: ${error.message}` },
        { status: 500 }
      );
    } else if (error instanceof Error) {
      console.error('General error:', error.message);
      return NextResponse.json(
        { error: `Error: ${error.message}` },
        { status: 500 }
      );
    } else {
      console.error('Unknown error:', error);
      return NextResponse.json(
        { error: 'An unknown error occurred' },
        { status: 500 }
      );
    }
  }
}
