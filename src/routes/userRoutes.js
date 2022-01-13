import express from "express";
import UserController  from "../controllers/userController";
import Validator from "../middlewares/validator";
import DataChecker from "../middlewares/datachecker";
import verifyAccess from "../middlewares/verifyAccess";
import verifyToken from "../middlewares/verifyToken";



const userRouter = express.Router();

userRouter.post ("/create",
Validator.newUserFounderRules(),
Validator.validateInput,
 DataChecker.isMobilePhoneNumberExist,
 
UserController.createUserFound,

);
userRouter.get("/allFounders",
verifyToken,
verifyAccess("admin"),
UserController.getAllUserFounders);
userRouter.get("/:id",
verifyToken,
verifyAccess("admin"),
UserController.getOneUserFounder);
userRouter.delete("/:id",
verifyToken,
verifyAccess("admin"),
UserController.deleteOneUserFounder,

);
userRouter.patch("/:id",
verifyToken,
verifyAccess("userFound","userLost","admin"),
UserController.changeUserFoundStatus);
userRouter.post("/login",

UserController.userFoundMobilePhoneNumberLogin);







export default userRouter;