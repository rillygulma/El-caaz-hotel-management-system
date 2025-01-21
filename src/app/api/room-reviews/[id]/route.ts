import { getRoomReviews } from '@/libs/apis';
import { NextResponse, NextRequest } from 'next/server';

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse> => {
  const roomId = params.id;

  try {
    const roomReviews = await getRoomReviews(roomId);

    return NextResponse.json(roomReviews, {
      status: 200,
      statusText: 'Successful',
    });
  } catch (error) {
    console.error('Getting Review Failed', error);
    return NextResponse.json(
      { error: 'Unable to fetch reviews' },
      { status: 400 }
    );
  }
};
