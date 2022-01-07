import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    firstName:String,
    lastName:String,

   phone: {
    type:String,
    required:true,
    },
    address:{
        type:String,
        default:"Rwanda"
    
    },
    role:{
        type:String,
        enum:["admin","userLost","userFound"]
    
    },
    email:{
        type:String
    },
    password:{
        type:String
    }





}
);
const user= mongoose.model("User",userSchema);
export default user;