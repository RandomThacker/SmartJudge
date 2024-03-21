import React from 'react';
import QuestionList_Card from './QuestionList_Card';
import { ScrollArea } from '@radix-ui/react-scroll-area';

export default function QuestionList() {
  const Questions_Sample: string[] = [
    "Two Sum",
    "BFS Traversal",
    "DFS Traversal",
    "Connect Provinces",
    "BFS trees",
    "1s Array"
  ];

  return (
    <ScrollArea className="overflow-x-auto">
      <div className="flex space-x-4">
        {Questions_Sample.map((questionName: string) => (
          <QuestionList_Card key={questionName} questionTitle={questionName} />
        ))}
      </div>
    </ScrollArea>
  );
}
