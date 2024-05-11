import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';


const backgroundImages = [
  'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600',
  // Add more background images as needed
];


enum Completion {
  UPCOMING,
  COMPLETED,
  ONGOING
}

interface Hosts {
  hostName: string;
}

interface Competition {
  id:string;
  eventName: string;
  hosts: Hosts[];
  date: string;
  time: string;
  description: string;
  completed: Completion;
  questionAsked: QuestionName[];
}

interface QuestionName {
  questionTitle: string;
}

interface CompetitionCardProps {
  competition: Competition;
}

export default function CompetitionCard({ competition }: CompetitionCardProps) {
  const { eventName, completed, date, hosts,id } = competition;

const eventid = id;
  const navi = useNavigate();

  // Limiting the number of displayed schools to 3
  // const displayedHosts = hosts.slice(0, 3);

  // Truncating extra schools with '...'
  // const truncatedSchools = hosts.length > 3 ? '...' : '';

  // Randomly select a background image
  const randomBackgroundImage = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];

  // convert date to string date
  const dateObject = new Date(date);
  const day = dateObject.getDate().toString().padStart(2, '0'); // Ensure 2 digits with leading zero if necessary
const month = (dateObject.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based, so add 1
const year = dateObject.getFullYear().toString().slice(-2); // Get last two digits of the year
const hours = dateObject.getHours().toString().padStart(2, '0'); // Ensure 2 digits with leading zero if necessary
const minutes = dateObject.getMinutes().toString().padStart(2, '0'); // Ensure 2 digits with leading zero if necessary

// Format as "HH:MM"
const formattedTime = `${hours}:${minutes}`;
// Format as "dd:mm:yy"
const formattedDate = `${day}/${month}/${year}`;

  const handleClick = () => {
    navi(`/events/${eventid}`);
  };

  return (
    <Card className="relative overflow-hidden rounded-lg m-4 p-6 w-[400px]"
      onClick={handleClick}
    >
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${randomBackgroundImage})`,
          filter: 'blur(4px) brightness(50%)',
          width: '100%', // Set the width and height to 100%
          height: '100%',
        }}
      />
      <div className="relative z-10 flex flex-col justify-between h-full p-4 text-white">
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold mb-2">{eventName}</h2>
          <p className="text-sm mb-2">
            {hosts.map((host, index) => (
              <span key={index}>
                {host.hostName}{index !== hosts.length - 1 ? ", " : ""}
              </span>
            ))}
          </p>

          <p className="text-sm">{formattedDate}    {formattedTime}   <b>{completed}</b></p>
        </div>
        <Button className="mt-2 bg-blue-500 hover:bg-blue-600"
          onClick={() => {
            navi(`/events/${eventid}`)
          }}
        >Register</Button>
      </div>
    </Card>
  );
}
