import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema({
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
    loginCode: {
        type: String,
        length:6
        },
    roles: {
        type: {
            admin: Boolean,
            seller: Boolean
        }
    }
})


const userModel = model("User", userSchema)

export default userModel;