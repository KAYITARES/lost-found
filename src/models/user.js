import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    firstName:String,
    lastName:String,

   phone: {
    type:String,
    required:true,
    unique:true,
    },
    address:{
        type:String,
        default:"Rwanda"
    
    },
    role:{
        type:String,
        enum:["admin","userLost","userFound"],
        default:"userLost",
    
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        required:true,

    }





}
);
const user= mongoose.model("User",userSchema);
export default user;