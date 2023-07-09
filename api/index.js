import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRoute from './routes/authRoutes.js';
import userRoute from './routes/userRoutes.js'



const app= express();
dotenv.config();
mongoose.set("strictQuery", true)

const port = process.env.PORT || 5000


const connect = async()=>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("Database Connected Succesfully")
    }
    catch(err){
        console.log(err)

    }
}
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth/", authRoute)
app.use("/api/user/",userRoute)

//ERROR HANDLER 

app.use((err, req, res, next)=>{
    const errorStatus=err.status || 500;
    const errorMessage=err.message||"SOmething Went Wrong"

    return res.status(errorStatus).send(errorMessage)
})
app.listen(port, ()=>{
    connect()
    console.log(`App Running on Port ${port}`)

})



