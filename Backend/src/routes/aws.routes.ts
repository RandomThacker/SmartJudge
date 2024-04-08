import express,{Request,Response} from 'express';
import axios from 'axios';
import { PrismaClient } from '@prisma/client';
import   {generatePutUrl,generateGetUrl} from '../controllers/s3.controllers'

export const awsRouter = express.Router();

const prisma = new PrismaClient();

awsRouter.get('/health',(req:Request,res:Response)=>{
    res
    .json({
        "isHealthy": true
    })
    .status(200);
})


awsRouter.get('/generate-get-url', (req, res) => {
    // Both Key and ContentType are defined in the client side.
    // Key refers to the remote name of the file.
    const { Key } = req.query;
    generateGetUrl(Key)
      .then(getURL => {      
        res.send(getURL);
      })
      .catch(err => {
        res.send(err);
      });
  });
  
  // PUT URL
  awsRouter.get('/generate-put-url', (req,res)=>{
    // Both Key and ContentType are defined in the client side.
    // Key refers to the remote name of the file.
    // ContentType refers to the MIME content type, in this case image/jpeg
    const { Key, ContentType } =  req.query;
    generatePutUrl(Key, ContentType).then(putURL => {
      res.send({putURL});
    })
    .catch(err => {
      res.send(err);
    });
  });