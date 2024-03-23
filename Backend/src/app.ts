import express,{ Express,Request,Response } from "express";
import cors from 'cors';

// routes
import { runRouter } from "./routes/coderun.routes";
import { questionRouter } from "./routes/questions.routes";

export const app:Express = express();

app.use(express.json())
app.use(cors())
app.get('/health',(req:Request,res:Response)=>{
    res.send("Server is healthy");
});


app.use('/run',runRouter);
app.use('/question',questionRouter);
