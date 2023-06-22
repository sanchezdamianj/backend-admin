import { Request, Response } from "express"


export const login = (req : Request, res: Response) => {
    res.send('LOGIN')
}

export const generateCode = (req : Request, res: Response) => {
    res.send("GENERATE CODE")
}

