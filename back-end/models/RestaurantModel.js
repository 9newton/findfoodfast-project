import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ratingSchema = new Schema(
  {
    fiveStar: { type: Number, default: 0 },
    fourStar: { type: Number, default: 0 },
    threeStar: { type: Number, default: 0 },
    twoStar: { type: Number, default: 0 },
    oneStar: { type: Number, default: 0 },
  },
  { _id: false }
);

const restaurant = new Schema(
  {
    coverImg: { type: String, default: "" },
    images: { type: Array, default: [] },
    name: { type: String, required: true },
    food: { type: String, required: true },
    timeOpen: { type: String, required: true },
    timeClose: { type: String, required: true },
    holiday: { type: Array, required: true },
    ratePrice: { type: String, required: true },
    tel: { type: String },
    line: { type: String },
    facebook: { type: String },
    delivery: { type: Array, required: true },
    tag: { type: Array, required: true },
    alley: { type: String, required: true },
    location: { type: String },
    rating: { type: ratingSchema },
  },
  {
    strict: false,
    versionKey: false,
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

export default mongoose.model("Restaurants", restaurant);