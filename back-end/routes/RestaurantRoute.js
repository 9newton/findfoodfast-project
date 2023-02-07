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
  resetRating
} from "../controllers/RestaurantController.js";
import Multer from "multer";
import auth from "../middleware/auth.js";

const router = express.Router();
const multer = Multer({
  storage: Multer.memoryStorage(),
});

router.get("/restaurants", getRestaurants);
router.get("/random", getRandom);
router.get("/restaurants/:id", getRestaurantById);

// router.use(auth);
router.post("/restaurants", saveRestaurant);
router.post(
  "/restaurants/upload/:id/:alley",
  multer.fields([
    { name: "images", maxCount: 10 },
    { name: "coverImg", maxCount: 1 },
  ]),
  uploadImageRestaurant
);
router.put("/restaurants/rating/:id", updateRatingRestaurant);
router.patch("/restaurants/:id", updateRestaurant);
router.delete("/restaurants/:id", deleteRestaurant);
router.put("/restaurants/resetRating", resetRating);

// Error handler
router.use((err, req, res, next) => {
  console.log({ err });
  res
    .status(err.statusCode ? err.statusCode : 503)
    .send(err.message)
    .end();
});

export default router;