import lostFoundInfos from "../models/lostFound";

class lostFoundController{
    static async register(req,res) {
 
        const lostFound= await lostFoundInfos.create(req.body);

        if(!lostFound) {
            return res.status(404).json({error:"not registered"});
        }
        return res 
        .status(200)
        .json({message:" registered successfully",data: lostFound });
    
    }
    // get all lostFound

    static async getAlllostFound(req, res) {
        const lostFound = await lostFoundInfos.find();
        if (!lostFound) {
          return res.status(404).json({ error: "lostFound not retrieved" });
        }
        return res
          .status(200)
          .json({ message: "successfully retrieved ", data: lostFound });
      }

      // get one user
static async getOnelostFound(req, res) {
    const lostFound = await lostFoundInfos.findById(req.params.id);
    if (!lostFound) {
      return res.status(404).json({ error: " not found" });
    }
    return res
      .status(200)
      .json({ message: " Found", data: lostFound });
  }

  //   delete one user
static async deleteOnelostFound(req, res) {
    const lostFound = await lostFoundInfos.findByIdAndDelete(req.params.id);
    if (!lostFound) {
      return res.status(404).json({ error: " not found" });
    }
    return res
      .status(200)
.json({ message: " deleted successfully ", data: lostFound });
  } 

  // update
    
  static async updatelostFound(req,res){

 const lostFound = await lostFoundInfos.findByIdAndUpdate(req.params.id,req.body, {new: true})
    if(!lostFound){
      return res.status(400).json({error:"failed to update"}); 
  }
  return res .status(200).json({ message: "updated successflly ", data: lostFound })
  }
}



export default lostFoundController;