import express,{Request,Response} from 'express';
import axios from 'axios';
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


eventRouter.post('/create',(req:Request,res:Response)=>{
    const {particpants,completed,hosts,description,eventName} = req.body;


})
