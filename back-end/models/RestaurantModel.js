import mongoose from "mongoose";

const Restaurant = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    food: {
        type: String,
        required: true
    },
    timeOpen: {
        type: String,
        required: true
    }
    ,
    timeClose: {
        type: time,
        required: true
    }
    ,
    holiday: {
        type: String,
        required: true
    }
    ,
    ratePrice: {
        type: String,
        required: true
    }
    ,
    contact: {
        type: String,
        required: true
    }
    ,
    delivery: {
        type: String,
        required: true
    }
    ,
    tag: {
        type: String,
        required: true
    }
    ,
    alley: {
        type: String,
        required: true
    }
});

export default mongoose.model('Restaurants', Restaurant);