import { Response } from "express"
import SaleModel from "../models/sale"
import ClientModel from "../models/client"


export const getAll = async (req : any, res: Response) => {
    try{
        const filter = req.user?.roles.admin ? {} : {user: req.user?.sub}
        const sales = await SaleModel.find(filter)
   
        res.status(200).json({ ok: true, data: sales})
    } catch(err){
        res.status(500).json({ok: false, message: "Network Server error"})
    }
}

export const createSale = async ( req: any, res: Response) => {
    const { operation_date, total_amount, products, payment_method, client  } = req.body
    try{
        const saleCreation = await SaleModel.create({
            operation_date,
            total_amount,
            products,
            payment_method,
            client,
            user: req.user.sub
        })
        
        await ClientModel.findByIdAndUpdate(saleCreation.client,{ $inc: {
            "sales.count": 1, "sales.amount": total_amount
        }})
        res.status(201).json({ok: true, data: saleCreation})

    } catch(err) {
        res.status(500).json({ok: false, message: "Missing data to save a sale"})
    }
}





