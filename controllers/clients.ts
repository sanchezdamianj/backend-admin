import { Request, Response } from "express"
import ClientModel from "../models/client"
import { Client } from "../schemas/clients"


export const getAll = async (req : Request, res: Response) => {
    try{
        const clients = await ClientModel.find()
        res.status(200).json({ ok: true, data: clients})
    } catch(err){
        res.status(500).json({ok: false, message: "Network Server error"})
    }
}

export const create = async ( req: Request<any,any,Client>, res: Response) => {
    const {firstName, lastName, email, document_type, document_value} = req.body
    console.log(req.body)
    try{
       
        const createdClient = await ClientModel.create({
            firstName, lastName, email, document_type, document_value
        })
        res.status(201).json({ok: true, data: createdClient})
    } catch(err) {
        console.log(err)
        res.status(500).json({ok: false, message: "Missing data"})
    }
}


export const getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try{
        const client = await ClientModel.findById(id)
        if(client){
            console.log(client)
            res.status(200).json({ok: true, data: client})
        }
    } catch( err) {
        res.status(500).json({ok: false, message: 'Client Not found'})
    }
}
export const getByDocument = async (req: Request, res: Response) => {
    const { document } = req.params;
    try{
        const client = await ClientModel.findOne({document_value: document})
        if(client){
            console.log(client)
            res.status(200).json({ok: true, data: client})
        }
    } catch( err) {
        res.status(500).json({ok: false, message: 'With this document there is no client'})
    }
}

export const update = async (req: any, res: Response) => {
    const { id } = req.params;
    try{
        const clientUpdated = await ClientModel.findByIdAndUpdate(id, req.body)
      
        res.status(201).json({ok: true, data: clientUpdated})
        
    } catch( err) {
        console.log(err)
        res.status(500).json({ok: false, message: 'Client can Not be updated'})
    }
}
