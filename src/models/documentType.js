import mongoose from "mongoose"

const documentTypeSchema=new mongoose.Schema({
    name:{
       type:String,
       required:true,
       unique:true
    },
    description:String
},
{
    timestamps:true,
}
)
const documentType=mongoose.model('DocumentType',documentTypeSchema)
export default documentType;