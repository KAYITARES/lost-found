import UserInfos from "../models/user";

class Datachecker{

    //check if user PHONE exist

static async isMobilePhoneNumberExist (req,res,next){

    const user = await UserInfos.findOne({Phone:req.body.phone});

  

if(!user) {
    return next();
}
return  res.status(401).json ({error:"phone already exist!"})

}


}

export default Datachecker;