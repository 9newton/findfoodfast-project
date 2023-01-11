import mongoose from "mongoose";
const Schema = mongoose.Schema;

const report = new Schema(
  {
    subject: { type: String, required: true },
    category: { type: Array, required: true },
    details: { type: String, required: true },
  },
  {
    strict: false,
    versionKey: false,
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

export default mongoose.model("Reports", report);