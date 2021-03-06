import mongoose from "mongoose";
// import user from "../models/user";
import userInfos from "../models/user";
import bcrypt from "bcrypt";
import TokenAuth from "../helpers/tokenAuth";

// import lostFoundInfos from "../models/lostFound";
import docController from "../controllers/docController";

class UserController{

    //CREATING ACCOUNT FOR USERFOUNDERS
static async createUserFound(req,res){

    const hashPassword = bcrypt.hashSync(req.body.password, 10);

    req.body.password = hashPassword;

    const user = await userInfos.create(req.body);
    if (!user) {
        return res.status(404).json({ error: "userFound not registered" });


    }
    return res
    .status(200)
    .json({ message: "userFound created successfully" ,data: user});
}

// GETTING ALL USERFOUNDERS

static async getAllUserFounders(req, res) {
    const users = await userInfos.find();

    if (!users) {
        return res.status(404).json({ error: "userFounders not found" });

    }
    return res
        .status(200)
        .json({ message: " userFounders found successfully",data: users  });
}

        // UPDATING USERFOUNDERS

        static async changeUserFoundStatus(req,res){
          
    
            const user = await userInfos.findByIdAndUpdate(req.params.id,req.body,{new:true});
    
            if(!user){
                return res.status(404).json({error:"failed to update status"});
            }
                return res
                .status(200)
                .json({ message: " updated successfully", data: user });
        }
        



// GETTING ONE USERFOUNDER

static async getOneUserFounder(req,res) {

    const user = await userInfos.findById(req.params.id);
    if(!user){
        return res.status(404).json({error:" One userFounder not found"});
    }
    return res
    .status(200)
    .json({message:"One userFounder has been retrieved", data:user});
}


// DELETING ONE USERFOUNDER

static async deleteOneUserFounder(req,res){

    const user = await userInfos.findByIdAndDelete(req.params.id);
    if (!user) {
        return res.status(404).json({ error: "userFounder not found" })
    }
    return res.status(200).json({ message: "userFounder removed successfully", data: user });
}


//LOGIN USING PHONENUMBEER FOR USERFOUNDERS

static async userFoundMobilePhoneNumberLogin(req, res) {

    const users = await userInfos.findOne({ phone: req.body.phone });

    if (!users) {
        return res.status(404).json({ error: "user not found! kindly register first" })
    }


    if (bcrypt.compareSync(req.body.password, users.password)) {
        users.password = null;
        const token = TokenAuth.tokenGenerator({ users: users });

        return res.status(200).json({ message: "successfully logged in", token: token, data:users });

    }
    return res.status(400).json({ error: "password is wrong", users:users });
}



}

export default UserController;