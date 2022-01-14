import express from "express";

import DocController from "../controllers/docController";
//import UserController  from "../controllers/userController";
import Validator from "../middlewares/validator";
import DataChecker from "../middlewares/datachecker";
import verifyAccess from "../middlewares/verifyAccess";
import verifyToken from "../middlewares/verifyToken";
import User from "../models/user";
import userRoutes from "../routes/userRoutes";

const docRouter = express.Router();

docRouter.post(
  "/register",
  verifyToken,
  DataChecker.isDocumentExist,
  DocController.createDoc
);
docRouter.get(
  "/all",
//   verifyToken,
//   verifyAccess("admin"),
  DocController.getAllDocument
);
docRouter.get(
  "/:id",
  verifyToken,
  verifyAccess("admin"),
  DocController.getOneDoc
);
docRouter.delete(
  "/:id",
  verifyToken,
  verifyAccess("admin"),
  DocController.deletOneDoc
);
docRouter.patch("/:id", DocController.changeDocument);

export default docRouter;
