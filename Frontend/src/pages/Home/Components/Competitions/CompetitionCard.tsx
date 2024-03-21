import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';


const backgroundImages = [
    'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600',
    // Add more background images as needed
  ];


interface Competition {
  id: number;
  title: string;
  schools: string[];
  date: string;
  time: string;
}

interface CompetitionCardProps {
  competition: Competition;
}

export default function CompetitionCard({ competition }: CompetitionCardProps) {
  const { title, schools, date, time } = competition;

  // Limiting the number of displayed schools to 3
  const displayedSchools = schools.slice(0, 3);
  // Truncating extra schools with '...'
  const truncatedSchools = schools.length > 3 ? '...' : '';

  // Randomly select a background image
  const randomBackgroundImage = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];

  return (
      <Card className="relative overflow-hidden rounded-lg m-4 p-6 w-[400px]">
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
            <h2 className="text-lg font-semibold mb-2">{title}</h2>
            <p className="text-sm mb-2">{displayedSchools.join(", ")}{truncatedSchools}</p>
            <p className="text-sm">{date} {time}</p>
          </div>
          <Button className="mt-2 bg-blue-500 hover:bg-blue-600">Register</Button>
        </div>
      </Card>
  );
}
