import React from 'react';
import { Spotlight } from '@/components/ui/Spotlight';
import { Button } from '@/components/ui/button';

export default function Page() {

  return (
    <div className="h-screen w-full rounded-md flex flex-col md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          SmartJudge <br />   is your new friend.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Make an impact on your resume . Upskill yourself in DSA and learn faster with our Recommendation ML Systems
        </p>
      </div>
      <div className='flex flex-col m-4 gap-4 w-full items-center'>
        <Button className='max-w-md'>
          Take me there
        </Button>
        <Button variant='outline' className='min-w-sm max-w-md p-4'>
          Learn More
        </Button>
        
      </div>
    </div>
  );
}
