import mongoose from "mongoose";

const Restaurant = mongoose.Schema({
  coverImg: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
  food: {
    type: String,
    required: true,
  },
  timeOpen: {
    type: String,
    required: true,
  },
  timeClose: {
    type: String,
    required: true,
  },
  holiday: {
    type: Array,
    required: true,
  },
  ratePrice: {
    type: String,
    required: true,
  },
  tel: {
    type: String,
    required: false,
  },
  line: {
    type: String,
    required: false,
  },
  facebook: {
    type: String,
    required: false,
  },
  delivery: {
    type: Array,
    required: true,
  },
  tag: {
    type: Array,
    required: true,
  },
  alley: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: false,
  },
});

export default mongoose.model("Restaurants", Restaurant);
