import mongoose from 'mongoose';
import userModel from '../models/user';

async function connectDB() {
    if(!process.env.MONGODB_URL){
        throw new Error('no url found')
    }
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('connected to Mongo DB')
        // const newUser = new userModel({
        //     firstName: 'dami',
        //     lastName: 'sanz',
        //     email: 'damian@mail.com',
        //     loginCode: '123456',
        //     roles: {
        //         admin: true,
        //         seller: true
        //     }
        // }) 
        // await newUser.save();
        // console.log("new user",  newUser)
    } catch(err) {
        console.log('not connected to mongodb',err)
    }
}

export default connectDB;