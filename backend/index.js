const express = require('express');
require('dotenv').config();

const {connection}=require("./db")
const {userRouter}=require("./route/user.route")
const {quizRouter}=require("./route/quiz.route")

const app = express();
const cors = require("cors")

app.use(cors())
///usdfhsid

app.use(express.json())
app.use("/",userRouter);
app.use("/quiz",quizRouter);

app.get('/', (req, res) =>{
    res.send("Welcome to quiz..")
})

app.listen(1111, async(req,res)=>{
    try{
        await connection 
        console.log('database is connected');
    } catch(err){
        console.log(err.message);
        console.log("server is not running..")
    }
    console.log('server is running on port ');
})