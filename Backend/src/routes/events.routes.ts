import express,{Request,Response} from 'express';
import axios from 'axios';
import { PrismaClient } from '@prisma/client';

export const eventRouter = express.Router();

const prisma = new PrismaClient();

eventRouter.get('/health',(req:Request,res:Response)=>{
    res
    .json({
        "isHealthy": true
    })
    .status(200);
})

eventRouter.get('/',async (req:Request,res:Response)=>{
    
    const eventsList = await prisma.event.findMany({
        include: {
            questionAsked: {
                select:{
                    problemName:true
                }
            },
            hosts: {
                select:{
                    hostName:true
                }
            }
          }
    });

    if(eventsList.length == 0){
      return  res
        .json({
            size:0,
            events : eventsList
        })
    }
    
   return  res
    .json({
        size : eventsList.length,
        events:eventsList
    })
    .status(200);
})


eventRouter.get('/:eventName', async (req: Request, res: Response) => {
    const eventName = req.params.eventName; 
    console.log(eventName);
    
    try {
        const event = await prisma.event.findUnique({
            where: {
                id:eventName
            }
        });

        console.log(event);
                

        if (!event) {
            return res.json({
                error:"Event Not Found"
            }).status(404);
        }

        return res.json({
            event: event
        }).status(200);
    } catch (error) {
        console.error("Error retrieving event:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});
