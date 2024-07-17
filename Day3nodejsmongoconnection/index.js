import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './Database/dbConfig.js';
import empRoutes from './Routers/employee.router.js';
import tlRoutes from './Routers/teamlead.router.js';
dotenv.config()

const app= express()
app.use(cors())
app.use(express.json())


app.get('/', (req,res)=>{
    res.status(200).send("App is working fine")
})

app.use('/api/emp', empRoutes);
app.use('/api/teamlead', tlRoutes);

connectDB();

app.listen(process.env.PORT,()=>{
    console.log("APP is listening in the port", process.env.PORT);
})