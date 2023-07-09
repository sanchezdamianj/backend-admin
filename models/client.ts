import mongoose, { Schema, model } from "mongoose";

const clientSchema = new Schema({
    firstName: {
        type:String , 
        required:true 
    },
    lastName: {
        type:String , 
        required:true 
    },
    email: {
        type: String, 
        unique:true
    },
    document_type: {
        type: String,
        required:true
        },
    document_value: {
        type: String,
        required:true
        },
    sales: {
        type: {
            count: Number,
            amount: Number
        },
    }
})


const ClientModel = model("Client", clientSchema, "clients")

export default ClientModel;