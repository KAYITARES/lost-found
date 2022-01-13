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
userRouter.get("/:id",UserController.getOneUserFounder);
userRouter.delete("/:id",
UserController.deleteOneUserFounder,

);
userRouter.patch("/:id",UserController.changeUserFoundStatus);
userRouter.post("/login",

UserController.userFoundMobilePhoneNumberLogin);







export default userRouter;