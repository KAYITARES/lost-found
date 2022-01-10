import documentTypeInfo from "../models/documentType"

class documentTypeController{
    // create type of document in db
    static async createDocumentType(req,res){
        const documentType=await documentTypeInfo.create(req.body);
        if(!documentType){
            return res.status(404).json({error:"document type not registered"});
        }
        return res.status(200).json({message:"document type successfully created", data:documentType})
    }
    //get all document type in db
    static async getAllDocumentTypes(req,res){
        const documentTypes=await documentTypeInfo.find();
        if(!documentTypes){

            return res.status(404).json({error:"document types not successfully retrieved"})
        }
        return res.status(200).json({message:"successFuly retrieved all document type",data:documentTypes})
    }
    //update
    static async updateDocumentTypes(req,res){
        const documentTypes=await documentTypeInfo.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!documentTypes){

            return res.status(404).json({error:"document types not successfully updated"})
        }
        return res.status(200).json({message:"document type successfully updated",data:documentTypes})
    }



    //get one document type in db
    static async getOneDocumentType(req,res){
        const documentType=await documentTypeInfo.findById(req.params.id)
        if(!documentType){
            return res.status(404).json({error:"document type not found"})
        }
        return res.status(200).json({message:"document type found",data:documentType})
    }
    //delete one document type in db
    static async deleteOneDocumentType(req,res){
        const documentType=await documentTypeInfo.findByIdAndDelete(req.params.id)
        if(!documentType){
            return res.status(404).json({error:"document type not found"})
        }
        return res.status(200).json({message:"document type successfully deleted"})
    }
}
export default documentTypeController;