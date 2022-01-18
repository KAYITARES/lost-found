import mongoose from 'mongoose';

const documentSchema= new mongoose.Schema(
    {

        DocumaTypeId:
        {
            type:mongoose.Schema.ObjectId,
            ref:"DocumentType"
           
        },

IDofthedocument:
{
    type:Number,
    required:true,
    unique:true,
},


status:{
    type: String,
    enum:["Lost","Found","Approved"],
},

Picturesofdocs: String,
UserID:{
     type:mongoose.Schema.ObjectId,
   ref:"User",
}

}
);
documentSchema.pre(/^find/, function (next) {
    this.populate({
      path: "UserID",
      select: "lastName role address phone",
    });
    next();
  });

const doc =mongoose.model('Document',documentSchema);
export default doc;