import { Request, Response } from "express"
import sendEmail from "../helpers/mailer"
import UserModel from "../models/user"
import jwt from "jsonwebtoken"
import { CONFIG } from "../utils/config"

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

    const tokenPayload = {
        sub: user.id, 
        email: userObject.email,
        firstName: user.firstName,
        lastName: user.lastName,
        imageURL: user.imageURL, 
        roles: user.roles
    }
    const token = jwt.sign(
        tokenPayload
        , 
        process.env.JWT_SECRET_KEY as string
    )

    res.cookie("jwt", token, {
        maxAge: 1000*60*60*24*30,
        httpOnly: CONFIG.isProd,
        sameSite: "none",
        secure: true
    })

    res
    .status(200)
    .json({ok:true,data:tokenPayload ,message: "Logged in"})
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
    // res.send(`GENERATE CODE: ${codeToSend}`)
    res.status(200).json({ok: true, message:'Code was sent successfully'})
}

