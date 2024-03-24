import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CompetitionCard from './CompetitionCard';
import { useRecoilState } from 'recoil';
import {eventState} from '../../../../../atom/EventsAtom';

export default function CompetitionList() {
  const [competitionArray, setCompetitionArray] = useRecoilState(eventState);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:8000/events");
        const events = response.data.events;
        setCompetitionArray(events);
      } catch (error) {
        console.error("Error fetching events:", error);
        // Handle error, such as displaying an error message to the user
      }
    };

    fetchEvents();
  }, []); // No dependencies needed here

  return (
    <div className="flex overflow-x-auto p-3">
      {competitionArray && competitionArray.map(competition => (
        <CompetitionCard  competition={competition} />
      ))}
    </div>
  );
}
