import express from "express";

import DocController from "../controllers/docController";

const docRouter =express.Router();

docRouter.post("/register",DocController.createDoc)
docRouter.get("/all", DocController.getAllDocument)
docRouter.get("/:id", DocController.getOneDoc)
docRouter.delete("/:id", DocController.deletOneDoc)
docRouter.patch("/:id",DocController.changeDocument)



export default docRouter;