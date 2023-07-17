const express = require('express');
const userRouter = express.Router();
const {Usermodel}=require("../model/user.model");

// Middleware to handle user creation
userRouter.post("/register", async(req, res)=> {
    const { username, email } = req.body
    try {
        const ispresent = await Usermodel.findOne({ email })
        if(ispresent){
            return res.status(400).json({ message : 'user already exist...please login directly!' })
        }

        const user = new Usermodel({ username, email })
        await user.save()
        res.status(200).json({ message : 'Registertion Successful' })
    } catch (error) {
        res.status(400).send({ "message": error.message })
    }
})

module.exports = {userRouter};
