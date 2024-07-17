import express from 'express';
import cors from 'cors';
import fs from 'fs'  // file system, default package
import { format } from 'date-fns'

const app= express()
app.use(cors())  // which domain, port
const PORT=4000  // .env

//API generate      // '/' -> endpoints
app.get('/', (req, res)=>{
    // res.status(200).json({message:"welcome to backend world, All the best Guys"})
    res.status(200).send(
        `<div style="background-color:blue ; color: white" >
        <h1> using html, my dear learners  </h1>
        </div>`
    )
})

app.get('/writereadfile', (req, res)=>{
    let today = format(new  Date(), 'dd-MM-yyyy-HH-mm-ss') //15-07-2024-12-51-10
    console.log(today);
    const filePath= `TimeStamp/${today}`

    fs.writeFileSync(filePath, `${today}`, 'utf8');

    let data = fs.readFileSync(filePath, 'utf8')

    try {
        res.status(200).send(data)
    } catch (error) {
        console.log(error);
    }

    


})




//url : http://localhost:4000 / first




app.listen(PORT, ()=>{
    console.log("App is listening in the port:", PORT);
}) // port : 4000 req

