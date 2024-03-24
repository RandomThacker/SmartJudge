import React from 'react';
import { Separator } from '@/components/ui/separator';

function EventBox({ month, date }) {
  return (
    <div className='rounded-lg flex flex-col items-center '>
      <div className='px-1 bg-gray-300 text-white rounded-t-lg'>
        {month.toUpperCase()}
      </div>
      <Separator />
      <div className='font-semibold'>
        {date}
      </div>
    </div>
  );
}

export default function EventDate({ dateEvent }: { dateEvent: string }) {
  let dateObject;
  let date;
  let month;
  let time;

  try {
    dateObject = new Date(dateEvent);
    date = dateObject.getDate().toString();
    month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(dateObject);
    const hours = ('0' + dateObject.getHours()).slice(-2);
    const minutes = ('0' + dateObject.getMinutes()).slice(-2);
    time = `${hours}:${minutes}`;
  } catch (error) {
    console.error('Error parsing date:', error);
    dateObject = new Date();
    date = '';
    month = '';
    time = '';
  }

  return (
    <div className='flex gap-3 my-3 ml-2'>
      <EventBox month={month} date={date} />

      <div className='flex flex-col'>
        <span className='font-bold'>{dateObject.toLocaleString('en-US', { weekday: 'long' })}, {dateObject.toLocaleString('en-US', { month: 'long', day: 'numeric' })}</span>
        <span className='text-gray-400'>{time}</span>
      </div>
    </div>
  );
}
