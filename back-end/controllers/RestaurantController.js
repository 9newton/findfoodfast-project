import Restaurant from "../models/RestaurantModel.js";
import mongoose from "mongoose";
import { uploadImage } from "../utils/index.js";

const { ObjectId } = mongoose.Types;

export const getRestaurants = async (req, res, next) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).send(restaurants).end();
  } catch (error) {
    next(error);
  }
};

export const getRestaurantById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const restaurant = await Restaurant.findById(id);
    res.status(200).send(restaurant).end();
  } catch (error) {
    next(error);
  }
};

export const saveRestaurant = async (req, res, next) => {
  const restaurant = new Restaurant(req.body);
  try {
    const insertedrestaurant = await restaurant.save();
    res.status(201).send(insertedrestaurant).send();
  } catch (error) {
    next(error);
  }
};

export const updateRestaurant = async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const restaurant = await Restaurant.updateOne({ _id: id }, { $set: body });
    res.status(200).send(restaurant);
  } catch (error) {
    next(error);
  }
};

export const deleteRestaurant = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedRestaurant = await Restaurant.deleteOne({
      _id: id,
    });
    res.status(200).send(deletedRestaurant).end();
  } catch (error) {
    next(error);
  }
};

export const uploadImageRestaurant = async (req, res, next) => {
  try {
    const { id, alley } = req.params;
    let { coverImg, images } = req.files;
    coverImg = coverImg[0];

    if (!coverImg || !images.length) {
      throw { message: "Please insert correct images", statusCode: 400 };
    }

    const promisesImages = images.map((img) =>
      uploadImage(id, alley, img.originalname, img, "image")
    );

    const imagesUrl = await Promise.all([
      uploadImage(id, alley, coverImg.originalname, coverImg),
      ...promisesImages,
    ]);

    coverImg = imagesUrl[0];
    imagesUrl.shift();
    images = imagesUrl;

    await Restaurant.findByIdAndUpdate(id, { $set: { coverImg, images } });
    res.status(200).send("OK").end();
  } catch (error) {
    next(error);
  }
};

export const updateRatingRestaurant = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { prevRating, updateRating } = req.body;
    validateRating(id, prevRating, updateRating);

    const restaurant = await Restaurant.findById(id);
    if (!restaurant) {
      throw { message: "Restaurant not found", statusCode: 404 };
    }

    let { rating } = restaurant;

    if (!rating) {
      rating = {
        fiveStar: 0,
        fourStar: 0,
        threeStar: 0,
        twoStar: 0,
        oneStar: 0,
      };
    }

    if (prevRating === "none") {
      rating[updateRating] = rating[updateRating] + 1;
    } else {
      rating[prevRating] = rating[prevRating] - 1;
      rating[updateRating] = rating[updateRating] + 1;
    }

    await Restaurant.findByIdAndUpdate(id, { $set: { rating } });
    res.status(200).send("OK").end();
  } catch (err) {
    next(err);
  }
};

const validateRating = (id, prevRating, updateRating) => {
  if (!ObjectId.isValid(id)) {
    throw { message: "Please insert correct id", statusCode: 400 };
  }

  const staticStar = [
    "fiveStar",
    "fourStar",
    "threeStar",
    "twoStar",
    "oneStar",
    "none",
  ];

  console.log(updateRating);

  if (!staticStar.includes(prevRating) || !staticStar.includes(updateRating)) {
    throw { message: "Please insert correct rating", statusCode: 400 };
  }

  if (updateRating === "none") {
    throw { message: "Please insert correct rating", statusCode: 400 };
  }
};
