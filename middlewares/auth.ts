import { Response,NextFunction } from "express"
import jwt, { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken"

export const validateUser = () => {

    return (req: any, res: Response, next: NextFunction) => {
        try{
            if (!process.env.JWT_SECRET_KEY){
                throw new Error("jwt secret key missing")
            }
            const token = req.cookies.jwt
            const user = jwt.verify(token, process.env.JWT_SECRET_KEY)
            req.user = user
            next()

        } catch(err) {
            if( err instanceof JsonWebTokenError || 
                err instanceof TokenExpiredError){
                    res.status(401).json({ok: false, message: err.message})
            }
            res.status(500).json({ok: false, message: "Server error"})
        }
    }
} 