import React, { useEffect, useState } from 'react'
import EventHost from './Components/EventHost'
import EventImage from './Components/EventImage'
import EventDate from './Components/EventDeets/EventDate'
import RegistrationCard from './Components/Registration/RegistrationCard'
import axios from 'axios'
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom'


export default function EventPage() {
   const params =useParams();
  const eventname = params.eventname;
  
  interface EventDets{
    completed: string;
    date: string;
    description: string;
    eventName: string;
    id: string;
    noOfParticipants: number;
    time: string;
    image: string;
  }

  const [eventDetails,setEventDetails] = useState<EventDets>();
  const [eventMD,setEventMD] = useState<string>("");
  
  const fetchEventInfo = async () => {
    const eventDetailsResp = await axios.get(`${import.meta.env.VITE_SERVER_ROOTURL}/events/${eventname}`);
    const eventDesc = await axios.get(eventDetailsResp.data.event.description);
    setEventDetails(eventDetailsResp.data.event);
    setEventMD(eventDesc.data);
  }
  
  

  useEffect( ()=>{
    fetchEventInfo();
    console.log(eventDetails);
    
  },[])
  
  
  return (
    <section className=' w-full bg-gradient-to-blue'>
      <div className='flex'>

      <div className='p-4'>
        <EventImage imgsrc={eventDetails?.image as string} />
        <EventHost />
      </div>

      <div className='p-4'>
        <h1 className='font-black text-4xl'>{eventDetails?.eventName}</h1>
        <EventDate dateEvent={eventDetails?.date as string} />
        <RegistrationCard />

      </div>
      </div>

      <div className='p-4'>
        <h1 className='text-3xl font-bold underline my-4'>Event Info</h1>
              <ReactMarkdown>{eventMD}</ReactMarkdown>
      </div>
    </section>
  )
}
