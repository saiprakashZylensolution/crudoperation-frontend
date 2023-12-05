import { PROT,mongoddUrl } from './Config/Modules.js';
import { students } from './Model/studentmodels.js';
import express, { json } from "express";
import mongoose from 'mongoose';
import studentrouter from './Routes/StudentRoutes.js';
import cors from "cors"
const app = express()
app.use(express.json())
app.use(cors())
app.get('/',async(req,res)=>{
   res.status(200).send('hi bro')
})

app.use('/students',studentrouter)





mongoose.connect(mongoddUrl).then(()=>{
    console.log('connected')
    app.listen(PROT,()=>{
        console.log('server is created')
    })
}).catch((error)=>{
    console.log(error.message)
})