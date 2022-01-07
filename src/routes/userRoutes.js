import express from "express";
import UserController  from "../controllers/userController";



const userRouter = express.Router();

userRouter.post ("/create",UserController.createUserFound);
userRouter.get("/allFounders",UserController.getAllUserFounders);
userRouter.get("/:id",UserController.getOneUserFounder);
userRouter.delete("/:id",UserController.deleteOneUserFounder);
userRouter.patch("/:id",UserController.changeUserFoundStatus);







export default userRouter;