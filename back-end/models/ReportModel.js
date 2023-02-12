import mongoose from "mongoose";
const Schema = mongoose.Schema;

const report = new Schema(
  {
    subject: { type: String, required: true },
    category: { type: String, required: true },
    details: { type: String, required: true },
    email: { type: String, required: false }
  },
  {
    strict: false,
    versionKey: false,
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

export default mongoose.model("Reports", report);