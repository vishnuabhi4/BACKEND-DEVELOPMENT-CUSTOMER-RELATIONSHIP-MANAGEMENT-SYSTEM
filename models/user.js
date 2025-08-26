import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true
        },
        passwordHash:{
            type:String,
            required:true,
        },
        role:{
            type:String,
            enum:["admin","agent","user"],
            default:"user"
        }
    }
);

const User = mongoose.model("user",userSchema); //The model provides methods to fetch documents
export default User;