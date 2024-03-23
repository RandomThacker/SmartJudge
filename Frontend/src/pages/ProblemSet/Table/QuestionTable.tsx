import { useState, useEffect } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from './DataTable';
import axios from 'axios';
export interface Question {
  id: number;
  problemName: string;
  description: string;
  difficulty: string;
  companies: string[];
  maang: boolean;
}

const columns: ColumnDef<Question>[] = [
  {
    accessorKey: 'problemName',
    header: 'Problem Name',
  },
  {
    accessorKey: 'difficulty',
    header: 'Difficulty',
  },
  {
    accessorKey: 'companies',
    header: 'Companies',
  },
  {
    accessorKey: 'maang',
    header: 'Maang',
  },
];

export default function QuestionTable() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await axios.get('http://localhost:8000/question/');
        console.log(response);
        
        if (!response) {
          throw new Error('Failed to fetch data');
        }
        setQuestions(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
      }
    }
    fetchQuestions();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={questions} />
    </div>
  );
}
