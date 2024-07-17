import express from 'express';
import cors from 'cors';
import empRouter from './Routers/employee.router.js'
const app= express();

const PORT=4000;
app.use(cors())
app.use(express.json())  //bodyparser = body =json

app.get('/', (req, res)=>{
    res.status(200).send("App is working")
})

app.use('/api/emp',empRouter)

app.listen(PORT,()=>{
    console.log("App is listening in the port: ",PORT);
})

