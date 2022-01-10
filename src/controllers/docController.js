import docInfos from "../models/document";

class DocController{

    //create document

    static async createDoc(req,res){
        
        const doc= await  docInfos.create(req.body);

        if(!doc){
            return res.status(404).json({error:"Documents not Registered"})
        }
        return res.status(200).json({message:"Documents created successfully", data: doc});
    }

    // get all documents


static async getAllDocument(req,res){
    const doc= await  docInfos.find();

    if(!doc){
        return res.status(404).json({error:"Documents not successfully"})
    }
    return res.status(200).json({message:" Documents successfully", data:doc});
}
 //get one document
static async getOneDoc(req,res){
    const doc= await docInfos.findById(req.params.id);

    if(!doc){
        return res.status(404).json({error:"Document not found"});
    }
    return res.status(200).json({message:"Document found", data:doc});
}
// delete one document
static async deletOneDoc(req,res){
    const doc= await docInfos.findByIdAndDelete(req.params.id);

    if(!doc){
        return res.status(404).json({error:"Document not found to delete"});
    }
    return res.status(200).json({message:"Document deleted", data:doc});
}
// update document

        static async changeDocument(req,res){
            const doc = await docInfos.findByIdAndUpdate(req.params.id,req.body,{new:true});
            if(!doc){
                return res.status(404).json({error:"failed to update Document"});
            }
                return res
                .status(200)
                .json({ message: " updated successfully", data: doc });
        }
    
    

}
export default DocController; 
