import React from 'react';
import { Card } from '@/components/ui/card';
import QuestionList from '../Components/QuestionList';

export default function TodayQuestion() {
  return (
    <Card className='p-4 m-3'>
      <h1 className='font-bold text-3xl'>Hello Shivam</h1>
      <h1 className='font-medium text-gray-700 text-xl mb-4'>Here are the set of questions you should solve today</h1>
      <QuestionList />
    </Card>
  );
}