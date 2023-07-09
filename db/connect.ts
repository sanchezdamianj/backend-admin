import mongoose from 'mongoose';
import ProductModel from '../models/product';

async function connectDB() {
    if(!process.env.MONGODB_URL){
        throw new Error('no url found')
    }
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('connected to Mongo DB')

        // await ProductModel.create(
        //         {
        //             name: "magic mouse", 
        //             code: "65", 
        //             supplier_cost: 20
        //         }
        //     )
        
    } catch(err) {
        console.log('not connected to mongodb',err)
    }
}

export default connectDB;