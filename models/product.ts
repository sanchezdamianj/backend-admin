import { Schema, Types, model } from "mongoose";

export const productSchema = new Schema({
    name: {type: String, required: true},
    code: {type: String, required: true},
    supplier_cost: {type: Number, required: true},
    iva: { type: Number, default: 0.21, required: true},
    micro: {type: Number, default: 5.55, required: true},
    salvament_cost: {type: Number, default: 0.25, required: true },
    profit_margin:  {type: Number}
})

const ProductModel = model("Product", productSchema, "products")

export default ProductModel;