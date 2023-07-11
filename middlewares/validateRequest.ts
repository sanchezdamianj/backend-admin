import { Response,NextFunction } from "express"
import { AnyZodObject, ZodError } from "zod"


export const validateRequest = (schema: AnyZodObject ) => {

    return (req: any, res: Response, next: NextFunction) => {
        try{
            const result = schema.parse({body: req.body, params: req.params})
            console.log(result)
            next()

        } catch(err) {
            if( err instanceof ZodError ){
             return res
                        .status(400)
                        .json({ok: false, errors: err.errors.map(e => ({message: e.message, code: e.code}))})
            }
            console.log("server error",err)
            res.status(500).json({ok: false, message: "Server error"})
        }
    }
} 