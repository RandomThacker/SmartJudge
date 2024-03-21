import React from 'react';
import { Card } from '@/components/ui/card';

interface QuestionListCardProps {
  questionTitle: string;
}

export default function QuestionList_Card({ questionTitle }: QuestionListCardProps) {
  // Generate fake question tags
  const fakeTags = ["Array", "String", "Binary Tree"];
  // Generate a random difficulty level (1 to 3)
  const difficultyLevel = Math.floor(Math.random() * 3) + 1;

  return (
    <Card className='p-4 m-3 rounded-lg w-[400px]'>
      <div className="w-full">
        <h3 className="font-bold text-lg mb-2">{questionTitle}</h3>
        <div className="flex space-x-2 mb-2">
          {fakeTags.map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-gray-200 text-gray-700 rounded-md text-sm">{tag}</span>
          ))}
        </div>
        <div className="flex items-center">
          <span className={`text-sm font-medium text-gray-600 mr-2 ${difficultyLevel === 1 ? 'text-green-500' : difficultyLevel === 2 ? 'text-yellow-500' : 'text-red-500'}`}>
            {difficultyLevel === 1 ? 'Easy' : difficultyLevel === 2 ? 'Medium' : 'Hard'}
          </span>
        </div>
      </div>
    </Card> 
  );
}
