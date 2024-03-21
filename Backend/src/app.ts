import express,{ Express,Request,Response } from "express";

// routes
import { runRouter } from "./routes/coderun.routes";

export const app:Express = express();

app.use(express.json())

app.get('/health',(req:Request,res:Response)=>{
    res.send("Server is healthy");
});


app.use('/run',runRouter);