import { Request, Response } from "express"
import sendEmail from "../helpers/mailer"
import UserModel from "../models/user"
import jwt from "jsonwebtoken"

export const login = async (req : Request, res: Response) => {
    const { email } = req.params;
    const { code } = req.body;

    const user = await UserModel.findOne({email, loginCode: code})
    if(!user) { 
        return res.status(408).json({ok: false, message: "Incorrect code"})
    }

    const userObject = user.toObject()

    if (!process.env.JWT_SECRET_KEY){
        throw new Error("jwt secret key missing")
    }
    const token = jwt.sign(
        {
            sub: user.id, 
            email: userObject.email, 
            roles: userObject.roles
        }, 
        process.env.JWT_SECRET_KEY
        )

    res.cookie("jwt", token)

    res.status(200).json({ok:true, message: " Logged in"})
}


export const generateCode = async (req : Request, res: Response) => {
    const {email} = req.params;
    const user = await UserModel.findOne({email})
    console.log(user)
    
    if(!user) {
        return res.status(400).json({ok: false, message: "user not found in the db"});
    }
    
    let codeToSend = (Math.floor(Math.random() * 1000000)).toString()
    user.loginCode = codeToSend;
    await user.save()

    sendEmail({
        to: email, 
        subject: "There you have a code", 
        html: `code to enter: ${codeToSend} `
    })
    res.send(`GENERATE CODE: ${codeToSend}`)
}

