import { Schema, Types, model } from "mongoose";

const paymentMethodSchema = new Schema({
    method: {type: String},
    amount: {type: Number, required: true},
    time_unit: {type: String, required: true},
    time_value:{type: Number, required: true},
})

const salesSchema = new Schema({
    operation_date: Date,
    total_amount: {type: Number},
    products: [{code:String, name:String, quantity: Number, unit_price: Number, discount: {type: Number, default: 0}}],
    payment_method: [paymentMethodSchema],
    user: {
        type: Types.ObjectId,  
        ref: "User"
    },
    client: {
        type: Types.ObjectId,
        ref: "Client"
    }
})

const SaleModel = model("Sale", salesSchema, "sales")

export default SaleModel;