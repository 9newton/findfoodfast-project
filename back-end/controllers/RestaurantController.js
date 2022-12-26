import Restaurant from "../models/RestaurantModel.js";

export const getRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.json(restaurants);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getRestaurantById = async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);
        res.json(restaurant);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveRestaurant = async (req, res) => {
    const restaurant = new Restaurant(req.body);
    try {
        const insertedrestaurant = await restaurant.save();
        res.status(201).json(insertedrestaurant);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateRestaurant = async (req, res) => {
    try {
        const updatedrestaurant = await Restaurant.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedrestaurant);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteRestaurant = async (req, res) => {
    try {
        const deletedrestaurant = await Restaurant.deleteOne({_id:req.params.id});
        res.status(200).json(deletedrestaurant);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}