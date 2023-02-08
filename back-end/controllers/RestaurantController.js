import Restaurant from "../models/RestaurantModel.js";
import mongoose from "mongoose";
import { uploadImage } from "../utils/index.js";

const { ObjectId } = mongoose.Types;


export const getRandom = async (req, res, next) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).send(restaurants).end();
  } catch (error) {
    next(error);
  }
};
export const getCountRestaurant = async (req, res, next) => {
  try {
    const countRestaurant = await Restaurant.countDocuments();
    res.status(200).send({ countRestaurant }).end();
  } catch (error) {
    next(error);
  }
};

export const getTopRating = async (req, res, next) => {
  try {
    const topRestaurant = await Restaurant.findOne().sort({ avgRating: -1 });
    res.status(200).send(topRestaurant).end();
  } catch (error) {
    next(error);
  }
};

export const getMostView = async (req, res, next) => {
  try {
    const mostViewRestaurant = await Restaurant.findOne().sort({ visitorCount: -1 });
    res.status(200).send(mostViewRestaurant).end();
  } catch (error) {
    next(error);
  }
};

export const getCountWithTag = async (req, res, next) => {
  try {
    const countALaCarte = await Restaurant.countDocuments({ tag: 'อาหารจานเดียว' });
    const countNoodle = await Restaurant.countDocuments({ tag: 'ก๋วยเตี๋ยว' });
    const countBeverage = await Restaurant.countDocuments({ tag: 'เครื่องดื่ม' });
    const countSteak = await Restaurant.countDocuments({ tag: 'สเต็ก' });
    const countShabu = await Restaurant.countDocuments({ tag: 'ชาบู' });
    const countGrill = await Restaurant.countDocuments({ tag: 'หมูกะทะ' });
    const countSnacks = await Restaurant.countDocuments({ tag: 'ของทานเล่น' });
    const countDessert = await Restaurant.countDocuments({ tag: 'ของหวาน' });
    const countFruit = await Restaurant.countDocuments({ tag: 'ผลไม้' });
    res.status(200).send({
      countALaCarte,
      countNoodle,
      countBeverage,
      countSteak,
      countShabu,
      countGrill,
      countSnacks,
      countDessert,
      countFruit
    }).end();
  } catch (error) {
    next(error);
  }
};

export const getRestaurants = async (req, res, next) => {
  try {
    const PAGE_SIZE = parseInt(req.query.pageSize);
    const page = parseInt(req.query.page || "0");
    const searchValid = (req.query.search || "");
    const tagValid = (req.query.tag || "");
    const alleyValid = (req.query.alley || "");
    const sort = parseInt(req.query.sort || -1);
    const filterAndSearch = {
      $or: [
        { name: { $regex: searchValid, $options: 'i' } },
        { food: { $regex: searchValid, $options: 'i' } },
      ],
      $and: [
        { tag: { $regex: tagValid, $options: "i" } },
        { alley: { $regex: alleyValid, $options: "i" } },
      ],
    };

    const total = await Restaurant.find(filterAndSearch).countDocuments();

    const restaurant = await Restaurant.find(filterAndSearch)
      .skip(PAGE_SIZE * page)
      .limit(PAGE_SIZE)
      .sort({ avgRating: sort, _id: 1 });

    const result = { totalPages: Math.ceil(total / PAGE_SIZE), data: restaurant, totalData: total };

    res.json(result);
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

export const countVisits = async (req, res, next) => {
  const { id } = req.params;
  try {
    const restaurant = await Restaurant.findByIdAndUpdate(
      id,
      { $inc: { visitorCount: 1 } },
      { new: true }
    );
    if (!restaurant) {
      return res.status(404).send("Restaurant not found");
    }
    return res.send(restaurant);
  } catch (error) {
    return next(error);
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
    const deletedRestaurant = await Restaurant.findOneAndDelete({
      _id: ObjectId(id),
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

    const ratingStar = restaurant.rating;
    const total = ratingStar.fiveStar + ratingStar.fourStar + ratingStar.threeStar + ratingStar.twoStar + ratingStar.oneStar;
    const mean = (5 * ratingStar.fiveStar + 4 * ratingStar.fourStar + 3 * ratingStar.threeStar + 2 * ratingStar.twoStar + ratingStar.oneStar) / total;
    restaurant.avgRating = parseFloat(mean.toFixed(2));

    await Restaurant.findByIdAndUpdate(id, { $set: { rating } });
    await restaurant.save();
    res.status(200).send("OK").end();
  } catch (err) {
    next(err);
  }
}

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


  if (!staticStar.includes(prevRating) || !staticStar.includes(updateRating)) {
    throw { message: "Please insert correct rating", statusCode: 400 };
  }

  if (updateRating === "none") {
    throw { message: "Please insert correct rating", statusCode: 400 };
  }
};

export const resetRating = async (req, res, next) => {
  try {
    const defaultValues = {
      rating: {
        fiveStar: 0,
        fourStar: 0,
        threeStar: 0,
        twoStar: 0,
        oneStar: 0
      },
      avgRating: 0
    };
    const result = await Restaurant.updateMany({}, { $set: defaultValues });
    res.json(result);
  } catch (error) {
    next(error);
  }
};