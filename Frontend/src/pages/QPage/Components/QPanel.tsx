import React from 'react'
import QTagBar from './QTagBar';
import ReactMarkdown from 'react-markdown';
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card } from '@/components/ui/card';

interface QuestionPage{
    questionTitle : string;
    questionDesc : string;
    questionTags : string[];
    questionNumber:number;
  }

export default function QPanel({questionTitle,questionDesc,questionTags,questionNumber}:QuestionPage) {

  return (
    <Card className='p-4 m-2'>
     <h1 className='text-4xl font-bold'>
              {questionNumber}.  {questionTitle}
            </h1>
            <QTagBar tags={questionTags} />
            
            <ScrollArea className='h-[100%] overflow-visible'>
            <ReactMarkdown>
              {questionDesc}
            </ReactMarkdown>
            </ScrollArea>
    </Card>
  )
}
