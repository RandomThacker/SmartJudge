import express,{Request,Response} from 'express';
import axios from 'axios'
export const eventRouter = express.Router();


const MLPORT = process.env.MLPORT;
eventRouter.get('/health',async (req:Request,res:Response)=>{
   const response = await axios.get(`${MLPORT}/health`);
   res.json(response.data).status(200);
})

eventRouter.post('/recommend', async (req: Request, res: Response) => {

    try {
        const response = await axios.post(`${MLPORT}/recommend`, {
            user_id: 23,
            item_id: 1
        });
        res.status(200).json(response.data);
    } catch (error) {
        // Handle error
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
