import { getRoomReviews } from '@/libs/apis';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  context: { params: { id: string } } // Adjusted the second argument type
) {
  const { id: roomId } = context.params;

  try {
    const roomReviews = await getRoomReviews(roomId);

    return NextResponse.json(roomReviews, {
      status: 200,
      statusText: 'Successful',
    });
  } catch (error) {
    console.error('Getting Review Failed', error);
    return new NextResponse('Unable to fetch', { status: 400 });
  }
}
