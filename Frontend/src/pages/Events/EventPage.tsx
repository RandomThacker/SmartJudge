import React from 'react'
import EventHost from './Components/EventHost'
import EventImage from './Components/EventImage'
import EventDate from './Components/EventDeets/EventDate'
import RegistrationCard from './Components/Registration/RegistrationCard'

export default function EventPage() {
  
  const TitleName = "Weekly Coding Challenge"
  
  return (
    <section className='flex w-full bg-gradient-to-blue'>
      <div className='p-4'>
        <EventImage />
        <EventHost />
      </div>

      <div className='p-4'>
        <h1 className='font-black text-4xl'>{TitleName}</h1>
        <EventDate />

        <RegistrationCard />
      </div>
    </section>
  )
}
