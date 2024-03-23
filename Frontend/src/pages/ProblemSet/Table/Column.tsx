import { ColumnDef } from "@tanstack/react-table";
import { Question } from "./QuestionTable"; // Import the Question type from the QuestionTable file

export const columns: ColumnDef<Question>[] = [
  {
    accessorKey: "problemName",
    header: "Problem Name",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "difficulty",
    header: "Difficulty",
  },
  {
    accessorKey: "companies",
    header: "Companies",
  },
  {
    accessorKey: "maang",
    header: "Maang",
  },
];
