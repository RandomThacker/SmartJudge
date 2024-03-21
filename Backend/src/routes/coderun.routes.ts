import express,{Request,Response} from 'express';
import axios from 'axios';

export const runRouter = express.Router();


runRouter.get('/health',(req:Request,res:Response)=>{
    res
    .json({
        "isHealthy": true
    })
    .status(200);
})


import { Languages } from '../Common/language';
runRouter.post('/',async (req:Request,res:Response)=>{
    const code = req.body.code;
    const receivedLang = req.body.lang;

    var _pass:boolean = false;

    // Language cross check
    if (Object.values(Languages).includes(receivedLang)) {
        const _lang:Languages = receivedLang;
    } else {
        res.status(500).json({
            error:'Invalid language , Check Language enum for all options',
            pass : false
        });
    }

    // Empty file check
    if(code.length<1){
        _pass = false;

         res
         .status(400)
         .json({
            error:"You are sending an empty file . Stop burning our money .",
            pass: _pass
         })
    };

    
    // Calling Docker Instance
    const docker_response = await axios.post(process.env.EXEC_DOCKER_URL as string,{
        lang : receivedLang,
        code : code
    });



    res
    .status(200)
    .json({
            pass : docker_response.data.pass
    })
    
})