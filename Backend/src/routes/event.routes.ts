import express,{Request,Response} from 'express';
import { PrismaClient } from '@prisma/client';
import   generatePutUrl from '../controllers/s3.controllers'

export const eventRouter = express.Router();

const prisma = new PrismaClient();

eventRouter.get('/health',(req:Request,res:Response)=>{
    res
    .json({
        "isHealthy": true
    })
    .status(200);
})

eventRouter.post('/create', async (req: Request, res: Response) => {
    const {  completed, hosts, description, eventName } = req.body;

    try {
        // Assuming you have a 'events' table in your database through Prisma
        const id = eventName + Date.now();
        const date = new Date();
        const noOfParticipants = 0;
        const participants = []
        const event = await prisma.event.create({
            data: {
                id,
                date,
                noOfParticipants
                participants,
                completed,
                hosts,
                description,
                eventName
            }
        });

        res.status(201).json({ event });
    } catch (error) {
        console.error('Error creating event:', error);
        res.status(500).json({ error: 'Failed to create event' });
    }
});
