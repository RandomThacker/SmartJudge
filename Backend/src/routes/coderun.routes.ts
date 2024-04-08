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
       return  res.status(500).json({
            error:'Invalid language , Check Language enum for all options',
            pass : false
        });
    }

    // Empty file check
    if(code.length<1){
        _pass = false;

        return res
            .status(400)
            .json({
                error:"You are sending an empty file . Stop burning our money .",
                pass: _pass
            })
    };


    try {
        const event = {
            "user_code": req.body.code,
            "question_id": "TwoSum"
        };

        // const response = await axios.post('https://kaasxt2svwfra23ugdovy3fbeu0pxzuo.lambda-url.ap-south-1.on.aws/',event);
        // console.log(response);
        
        // const responseData = response.data; // Extracting data from Axios response
        
        setTimeout(() => {
            // Send the response after 5 seconds
            return res.status(200).json(event);
        }, 5000); // 5000 milliseconds = 5 seconds
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }

})