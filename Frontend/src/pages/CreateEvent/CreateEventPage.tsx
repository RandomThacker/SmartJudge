import React from 'react'
import EventImageCard from './Components/EventImageCard'
import EventDataForm from './Components/EventDataForm'
import EventHost from './Components/EventHost'
export default function CreateEventPage() {
  return (
    <div className='flex gap-6 justify-center py-20 px-12'>
        <div className='flex flex-col'>
        <EventImageCard />
        <EventHost />
        </div>

        <div>
        <EventDataForm />
        </div>
    </div>
  )
}
