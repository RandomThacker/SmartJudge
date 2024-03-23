import express,{Request,Response} from 'express';
import axios from 'axios';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const questionRouter = express.Router();

questionRouter.get('/health',(req:Request,res:Response)=>{
    res
    .json({
        "isHealthy": true
    })
    .status(200);
})

questionRouter.get('/', async (req: Request, res: Response) => {
    try {
      const questions = await prisma.question.findMany();
      res.json(questions).status(200);
    } catch (error) {
      console.error('Error fetching questions:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});
  