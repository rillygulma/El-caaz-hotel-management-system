import { checkReviewExists, createReview, getUserData, updateReview } from "@/libs/apis";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/libs/auth"; // Ensure this is correctly defined in your project
import { NextResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse('Authentication Required', { status: 401 });
  }

  const userId = session.user?.id;

  if (!userId) {
    return new NextResponse('User ID not found', { status: 400 });
  }

  try {
    const data = await getUserData(userId);
    return NextResponse.json(data, { status: 200, statusText: 'Successful' });
  } catch (error) {
    console.error('Error fetching user data:', error);
    return new NextResponse('Unable to fetch', { status: 500 });
  }
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse('Authentication Required', { status: 500 });
  }

  const { roomId, reviewText, ratingValue } = await req.json();

  if (!roomId || !reviewText || !ratingValue) {
    return new NextResponse('All fields are required', { status: 400 });
  }

  const userId = session.user.id;

  try {
    const alreadyExists = await checkReviewExists(userId, roomId);

    let data;

    if (alreadyExists) {
      data = await updateReview({
        reviewId: alreadyExists._id,
        reviewText,
        userRating: ratingValue,
      });
    } else {
      data = await createReview({
        hotelRoomId: roomId,
        reviewText,
        userId,
        userRating: ratingValue,
      });
    }

    return NextResponse.json(data, { status: 200, statusText: 'Successful' });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log('Error Updating', error);
    return new NextResponse('Unable to create review', { status: 400 });
  }
}