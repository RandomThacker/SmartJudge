import express,{ Express,Request,Response } from "express";
export const app:Express = express();


app.get('/health',(req:Request,res:Response)=>{
    res.send("Server is healthy");
});
