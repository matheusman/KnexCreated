import express from 'express';
import { Request, Response } from 'express';
import router from './Routes/IndexRouter.routes';


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended : true }))
app.use(router)

app.get('/', (req : Request, res : Response) => {
    res.status(200).send("teste")
})



export default app
