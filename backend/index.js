import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
// import Expense  from "./models/Expense.js"
import User from "./models/User.js";  

import dotenv from "dotenv";

dotenv.config();

const app=express()

app.use(cookieParser())
app.use(express.json())
app.use(cors({
    origin:["http://localhost:5173"],
    credentials:true
}))


const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log(" Connected to MongoDB"))
  .catch((err) => console.error(" MongoDB connection error:", err));

 app.post("/register",(req,res)=>{
    const {name,email,password}=req.body;
   User.create({name,email,password})
    .then(() =>res.json("Sucessfully register"))
    .catch(err =>res.json(err))
})

app.post("/login",(req,res) => {
 const {email,password}=req.body;
 User.findOne({email})
 .then(user => 
  {    
   if(user){
       if(user.password === password){
                    //access token and refresh token used for security purpose and to avoid login again and again
                    const accessToken = jwt.sign({email:email},"jwt-access-token-SecretKey",{expiresIn:"1m"})//
                    const refreshToken = jwt.sign({email:email},"jwt-refresh-token-SecretKey",{expiresIn:"5m"})
                    res.cookie("accessToken",accessToken,{maxAge:60000})
                    
                    res.cookie("refreshToken",refreshToken,{maxAge:30000,httpOnly:true,secure:true,sameSite:"strict"})
                     return res.json({Login:true})
                }
            
  }else{
    res.json("User not found")}
  })
 .catch(err =>res.json(err))
})
const verifyUser =(req,res,next) =>{

    const accessToken =req.cookies.accessToken;
    if(!accessToken){
           if(renewToken(req,res)){
            next()
           }
    }else{
        jwt.verify(accessToken,"jwt-access-token-SecretKey",(err,decoded) =>{
            if(err){
                return res.json({valid:false,messsage:"Session Expired"})
            }else{
                req.email =decoded.email;
                next()
            }
        })
    }
}
const renewToken =(req,res) =>{
    
    const refreshToken =req.cookies.refreshToken;
    let exist = false;
  
    if(!refreshToken){
        return res.json({valid:false,message:"User not Authenticated"})
    }else{
        jwt.verify(refreshToken,"jwt-refresh-token-SecretKey",(err,decoded) => {
            if(err){
                return res.json({valid:false,messsage:"Invaild refresh token"})
            }else{
                const accessToken = jwt.sign({email:decoded.email},"jwt-access-token-SecretKey",{expiresIn:"1m"})
                res.cookie("accessToken",accessToken,{maxAge:60000})
                 exist=true;
            }
        })
    }
    return exist;

}


app.get("/dashboard",verifyUser,(req,res)=>{
    return res.json({valid:true,message:"Authorised User"})
})
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));