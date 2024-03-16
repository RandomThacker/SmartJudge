import React from 'react'
import QTagBar from './QTagBar';
import ReactMarkdown from 'react-markdown';

interface QuestionPage{
    questionTitle : string;
    questionDesc : string;
    questionTags : string[];
    questionNumber:number;
  }

export default function QPanel({questionTitle,questionDesc,questionTags,questionNumber}:QuestionPage) {

  return (
    <div className='p-4'>
     <h1 className='text-4xl font-bold'>
              {questionNumber}.  {questionTitle}
            </h1>
            <QTagBar tags={questionTags} />
            
            <ReactMarkdown>
              {questionDesc}
            </ReactMarkdown>
    </div>
  )
}
