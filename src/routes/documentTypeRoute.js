import express from 'express';
import DocumentTypeController from "../controllers/documentTypeController";
import Validator from '../middlewares/validator';
import DataChecker from "../middlewares/datachecker";

const documentTypeRouter=express.Router();

documentTypeRouter.post(
    "/register",
    Validator.newDocumentTypeFounderRules(),
    Validator.validateInput,
    DataChecker.isDocumentTypeNameExist,
    DocumentTypeController.createDocumentType
);
//get all document type
documentTypeRouter.get(
    "/allDocumentType",
    DocumentTypeController.getAllDocumentTypes
);
//get one document type
documentTypeRouter.get(
    "/type/:id",
    DocumentTypeController.getOneDocumentType
)
//delete one document type
documentTypeRouter.delete(
    "/type/:id",
    DocumentTypeController.deleteOneDocumentType
)
documentTypeRouter.patch(
    "/update/:id",
    DocumentTypeController.updateDocumentTypes
)
export default documentTypeRouter;