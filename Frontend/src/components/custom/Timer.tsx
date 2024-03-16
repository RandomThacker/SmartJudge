import React, { useState, useEffect, useMemo } from 'react';

const Timer = () => {
    const [seconds,setSeconds] = useState(0);



  useEffect(()=>{
    const interval = setInterval(()=>{
        setSeconds(prev=>prev+1);
    },1000)

    return () => clearInterval(interval);
  })

  const displayTime = useMemo(() => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${hours}:${minutes}:${remainingSeconds}`;
  }, [seconds]);

  return (    
      <p>{displayTime}</p>
  );
};

export default Timer;
