import mongoose from "mongoose";

const Restaurant = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter a name']
    },
    food: {
        type: String,
        required: true
    },
    timeOpen: {
        type: String,
        required: false
    }
    ,
    timeClose: {
        type: String,
        required: false
    }
    ,
    holiday: {
        type: Array,
        required: true
    }
    // ,
    // ratePrice: {
    //     type: String,
    //     required: false
    // }
    // ,
    // contact: {
    //     type: String,
    //     required: false
    // }
    // ,
    // delivery: {
    //     type: String,
    //     required: false
    // }
    // ,
    // tag: {
    //     type: String,
    //     required: false
    // }
    // ,
    // alley: {
    //     type: String,
    //     required: false
    // }
});

export default mongoose.model('Restaurants', Restaurant);