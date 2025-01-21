'use client';

import { useEffect, useState } from 'react';
import useSWR from 'swr';

import { getRooms } from '@/libs/apis';
import Search from '@/components/Search/Search';
import RoomCard from '@/components/RoomCard/RoomCard';
import { Room } from '@/app/models/room';
import LoadingSpinner from '../loading';

const fetcher = async () => {
  const response = await getRooms();
  if (!response) throw new Error('Failed to fetch data');
  return response;
};

const Rooms = () => {
  const [roomTypeFilter, setRoomTypeFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      const searchQuery = searchParams.get('searchQuery');
      const roomType = searchParams.get('roomType');

      if (roomType) setRoomTypeFilter(roomType);
      if (searchQuery) setSearchQuery(searchQuery);
    }
  }, []);

  const { data, error, isLoading } = useSWR('get/hotelRooms', fetcher);

  if (error) return <div>Error: {error.message || 'Failed to fetch data.'}</div>;
  if (isLoading) return <LoadingSpinner/>;

  const filterRooms = (rooms: Room[]) => {
    if (!rooms || !Array.isArray(rooms)) return [];
    return rooms.filter(room => {
      // Apply room type filter
      if (
        roomTypeFilter &&
        roomTypeFilter.toLowerCase() !== 'all' &&
        room.type.toLowerCase() !== roomTypeFilter.toLowerCase()
      ) {
        return false;
      }

      // Apply search query filter
      if (
        searchQuery &&
        !room.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      return true;
    });
  };

  const filteredRooms = filterRooms(data || []);

  return (
    <div className='container mx-auto pt-10'>
      <Search
        roomTypeFilter={roomTypeFilter}
        searchQuery={searchQuery}
        setRoomTypeFilter={setRoomTypeFilter}
        setSearchQuery={setSearchQuery}
      />

      <div className='flex mt-20 justify-between flex-wrap'>
        {filteredRooms.length > 0 ? (
          filteredRooms.map(room => (
            <RoomCard key={room._id} room={room} />
          ))
        ) : (
          <div>No rooms found matching your criteria.</div>
        )}
      </div>
    </div>
  );
};

export default Rooms;
