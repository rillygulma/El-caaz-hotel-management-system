import { getRoomReviews } from '@/libs/apis';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define the type for the params in the context
type ContextParams = {
  params: {
    id: string; // The "id" must be a string
  };
};

// The GET function is explicitly typed
export async function GET(
  req: NextRequest,
  context: ContextParams
): Promise<NextResponse> {
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
