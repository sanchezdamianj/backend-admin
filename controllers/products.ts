import { Response } from "express"
import ProductModel from "../models/product"


export const getAll = async (req : any, res: Response) => {
    try{
        const products = await ProductModel.find()
        res.status(200).json({ ok: true, data: products})
    } catch(err){
        res.status(500).json({ok: false, message: "Network Server error"})
    }
}


export const getByCode = async (req: any, res: Response) => {
    const { code } = req.params;
    try{
        const product = await ProductModel.findOne({code})
        if(product){
            res.status(200).json({ok: true, data: product})
        }
    } catch(err) {
        res.status(500).json({ok: false, message: 'Product Not found'})
    }
}

