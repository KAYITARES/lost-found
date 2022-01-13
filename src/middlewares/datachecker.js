import UserInfos from "../models/user";
import DocumentTypeInfos from "../models/documentType"

class Datachecker{

    //check if user PHONE exist

static async isMobilePhoneNumberExist (req,res,next){

    const user = await UserInfos.findOne({phone:req.body.phone});

  

if(!user) {
    return next();
}
return  res.status(401).json ({error:"phone already exist!"})

}
static async isDocumentTypeNameExist(req,res,next){
    const documentTypeName=await DocumentTypeInfos.findOne({name:req.body.name});
    if(!documentTypeName){
        return next();
    }
    return res.status(401).json({error:"document type name already exist"})
}


}

export default Datachecker;