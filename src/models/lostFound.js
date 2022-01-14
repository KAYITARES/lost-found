import mongoose from "mongoose";

const lostFoundSchema = new mongoose.Schema({

    document:{ 
         type:mongoose.Schema.ObjectId,
        ref:"Document",
        
    },
        adress:String,
        phone:{
            type:String,
            required:"true",
        },
           
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User"  
        
const lostFoundSchema = new mongoose.Schema(
  {
    documentId: {
      type: mongoose.Schema.ObjectId,
      ref: "Document",
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const lostFound = mongoose.model("lostFound", lostFoundSchema);

export default lostFound;
