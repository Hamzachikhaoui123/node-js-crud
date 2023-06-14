import  express  from "express";
import dotenv from "dotenv";
import {notFound,errorHandler} from"./middleware/errorMiddleware.js";
import bodyParser from"body-parser"
import connectDB from"./config/db.js"

dotenv.config()
connectDB()

const port =process.env.PORT||5000;
import userRouters from "./routers/userRouters.js";



const app=express()
app.use(errorHandler)
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api/users',userRouters)

app.get('/',(req,res)=>res.send('get api'))
app.use(notFound);

app.use(express.urlencoded({extended:true}))
app.listen(port,()=>console.log('server connect '))

