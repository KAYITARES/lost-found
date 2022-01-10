import mongoose from 'mongoose';

const documentSchema= new mongoose.Schema(
    {

        DocumaTypeId:
        {
            type:Number,
            required:true,
            unique:true,
        },

IDofthedocument:
{
    type:Number,
    required:true,
    unique:true,
},

status:{
    type: String,
    enum:["Lost","Found"],
},

Picturesofdocs: String,
UserID:{
     type:Number,
     unique:true,
}

}
);

const doc =mongoose.model('Document',documentSchema);
export default doc;