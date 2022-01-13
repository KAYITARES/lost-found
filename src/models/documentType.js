import mongoose from "mongoose";

const documentTypeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: String,

    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);
documentTypeSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "lastName role address",
  });
  next();
});

const documentType = mongoose.model("DocumentType", documentTypeSchema);
export default documentType;
