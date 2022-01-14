import docInfos from "../models/document";

class Datachecker{

    //check if user email is exist
static async isEmailExist(req,res,next){
    const user= await userInfos.findOne({email: req.body.email});
    if (!user){
        return next();
    }
    return res.status(401).json({error: "Email is arlready Exist"})
}
}
export default Datachecker;