import mongoose from "mongoose";


const lostFoundSchema = new mongoose.Schema({

    documentId:{ 
         type:Number,
        ref:"Document",
        
    },
        adress:String,
        phone:{
            type:String,
            required:"true",
        },
           
    userId:{
        type:Number,
        ref:"User"  
        
    },
    


    
      }
    
  );
  
  const lostFound = mongoose.model("lostFound",lostFoundSchema);
  
  
  export default lostFound;