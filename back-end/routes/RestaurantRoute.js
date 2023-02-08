import express from "express";
import {
  getRestaurants,
  getRandom,
  getRestaurantById,
  saveRestaurant,
  updateRestaurant,
  deleteRestaurant,
  uploadImageRestaurant,
  updateRatingRestaurant,
  resetRating,
  countVisits,
  getTopRating,
  getMostView,
  getCountWithTagALaCarte,
  getCountWithTagNoodle,
  getCountWithTagBeverage,
  getCountWithTagSteak,
  getCountWithTagShabu,
  getCountWithTagGrill,
  getCountWithTagSnacks,
  getCountWithTagDessert,
  getCountWithTagFruit
} from "../controllers/RestaurantController.js";
import Multer from "multer";

const router = express.Router();
const multer = Multer({
  storage: Multer.memoryStorage(),
});

router.get("/restaurants", getRestaurants);
router.get("/random", getRandom);
router.get("/restaurants/:id", getRestaurantById);
router.put("/restaurants/countVisits/:id", countVisits)
router.put("/restaurants/rating/:id", updateRatingRestaurant);

// Admin
router.post("/restaurants", saveRestaurant);
router.post(
  "/restaurants/upload/:id/:alley",
  multer.fields([
    { name: "images", maxCount: 10 },
    { name: "coverImg", maxCount: 1 },
  ]),
  uploadImageRestaurant
);
router.patch("/restaurants/:id", updateRestaurant);
router.delete("/restaurants/:id", deleteRestaurant);
router.put("/restaurants/resetRating", resetRating);
//Admin Dashboard
router.get("/adminDashboard/topRating", getTopRating);
router.get("/adminDashboard/mostView", getMostView);
router.get("/adminDashboard/aLaCarte", getCountWithTagALaCarte);
router.get("/adminDashboard/noodle", getCountWithTagNoodle);
router.get("/adminDashboard/beverage", getCountWithTagBeverage);
router.get("/adminDashboard/steak", getCountWithTagSteak);
router.get("/adminDashboard/shabu", getCountWithTagShabu);
router.get("/adminDashboard/grill", getCountWithTagGrill);
router.get("/adminDashboard/snacks", getCountWithTagSnacks);
router.get("/adminDashboard/dessert", getCountWithTagDessert);
router.get("/adminDashboard/fruit", getCountWithTagFruit);

// Error handler
router.use((err, req, res, next) => {
  console.log({ err });
  res
    .status(err.statusCode ? err.statusCode : 503)
    .send(err.message)
    .end();
});

export default router;