import express,{ Express,Request,Response } from "express";
import dotenv from 'dotenv';


dotenv.config();

const app:Express = express();
const PORT:number|string = process.env.PORT || 8000;

app.get('/health',(req:Request,res:Response)=>{
    res.send("Server is healthy");
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);    
});