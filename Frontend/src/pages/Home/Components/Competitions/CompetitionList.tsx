import React from 'react';
import CompetitionCard from './CompetitionCard';

// Define a list of sample competitions
const competitions = [
  {
    id: 1,
    title: "Weekly Coding Challenge",
    schools: ["CIT", "CSE", "ECE"],
    date: "2024-04-15",
    time: "10:00 AM"
  },
  {
    id: 2,
    title: "Algorithms Hackathon",
    schools: ["School X", "School Y", "School Z"],
    date: "2024-05-20",
    time: "1:00 PM"
  },
  {
    id: 3,
    title: "Data Structures Competition",
    schools: ["School P", "School Q", "School R"],
    date: "2024-06-01",
    time: "2:30 PM"
  },
  {
    id: 4,
    title: "Code Sprint",
    schools: ["School M", "School N", "School O"],
    date: "2024-06-10",
    time: "9:00 AM"
  },
  // Add more sample competitions as needed
];

export default function CompetitionList() {
  return (
    <div className="flex overflow-x-auto p-3">
      {competitions.map(competition => (
        <CompetitionCard key={competition.id} competition={competition} />
      ))}
    </div>
  );
}
