import express from "express";
import lostFoundController from "../controllers/lostFoundController";
// import validator from "../middlewares/validator";
import UserController  from "../controllers/userController";

const lostRouter =express.Router();
lostRouter.post("/register",lostFoundController.register);
lostRouter.get("/all",lostFoundController.getAlllostFound);
lostRouter.get("/:id",lostFoundController.getOnelostFound);
lostRouter.delete("/:id",lostFoundController.deleteOnelostFound);
lostRouter.patch("/:id",lostFoundController.updatelostFound);







export default lostRouter;