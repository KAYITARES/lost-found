
import TokenAuth from "../helpers/tokenAuth";
import UserInfos from "../models/user";

const isUserFoundExist = async(req,res,next)=>{

    try{
        const token =req.header("x-auth-token");

        if(!token){
            return res.status(400).json({error:"Token is not generated"})
        }
        const data =TokenAuth.decodeToken(token);
        //CONSOLE.LOG(DATA)
        const{name}=data;
        if(name=="JsonWebTokenError"){
            return res.status(400).json({error:"Invalid JWT Token"});
        
        }
        if (name=="TokenExpiredError"){
            return res.status(400).json({error:"Token Expired"})
        }

//CONSOLE.LOG.DATA
// console.log(data)
req.user=data.users;
const user = await UserInfos.find(req.user);
if(!user)
{ return res.status(400).json({error:"user not found, you're nto authorised"});
    }
    return next()

      

    }
catch(err){

console.log(err);


}

}
export default isUserFoundExist;