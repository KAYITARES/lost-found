import express from "express";
import lostFoundController from "../controllers/lostFoundController";


const lostRouter =express.Router();
lostRouter.post("/register",lostFoundController.register);
lostRouter.get("/all",lostFoundController.getAlllostFound);
lostRouter.get("/:id",lostFoundController.getOnelostFound);
lostRouter.delete("/:id",lostFoundController.deleteOnelostFound);
lostRouter.patch("/:id",lostFoundController.updatelostFound);







export default lostRouter;