import UserInfos from "../models/user";
import DocumentTypeInfos from "../models/documentType";
import documentInfos from "../models/document";
import lostFoundInfos from "../models/lostFound";
import sendSms from "../helpers/sendSms";

class Datachecker {
  //check if user PHONE exist

  static async isMobilePhoneNumberExist(req, res, next) {
    const user = await UserInfos.findOne({ phone: req.body.phone });

    if (!user) {
      return next();
    }
    return res.status(401).json({ error: "phone already exist!" });
  }
  static async isDocumentTypeNameExist(req, res, next) {
    const documentTypeName = await DocumentTypeInfos.findOne({
      name: req.body.name,
    });
    if (!documentTypeName) {
      return next();
    }
    return res.status(401).json({ error: "document type name already exist" });
  }

  static async isDocumentExist(req, res, next) {
    const userDocument = await documentInfos.findOne({
      IDofthedocument: req.body.IDofthedocument,
    });

    // console.log(userDocument);

    if (!userDocument) {
      return next();
    } else if (
      (userDocument.status == "Lost" && req.body.status == "Found") ||
      (userDocument.status == "Found" && req.body.status == "Lost")
    ) {
      await documentInfos.findByIdAndUpdate(userDocument._id, {
        status: "Approved",
      });

      //send sms to user Lost userFound
      console.log(userDocument.UserID.phone);
      sendSms(
        req.user.firstName,
        req.user.phone,
        userDocument.IDofthedocument,
        userDocument.UserID.phone
      );

      let docData = {
        documentId: userDocument._id,
        userId: req.user._id,
      };

      const lostFoundData = await lostFoundInfos.create(docData);

      const data = await lostFoundInfos.findById(lostFoundData._id);

      return res.status(200).json({
        message: "document lost is found succesfully",
        data: data,
      });
    } else {
      return res.status(404).json({
        error: "failed to register document",
      });
    }
  }
}
static async isDocumentTypeNameExist(req,res,next){
    const documentTypeName=await DocumentTypeInfos.findOne({name:req.body.name});
    if(!documentTypeName){
        return next();
    }
    return res.status(401).json({error:"document type name already exist"})
}

export default Datachecker;
