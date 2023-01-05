import express from "express";
import {
    getRestaurants,
    getRestaurantById,
    saveRestaurant,
    updateRestaurant,
    deleteRestaurant,
    uploadImageRestaurant
} from "../controllers/RestaurantController.js";
import Multer from 'multer';

const router = express.Router();
const multer = Multer({
    storage: Multer.memoryStorage(),
    // limits: {
    //     fileSize: 5 * 1024 * 1024
    // }
});



router.get('/restaurants', getRestaurants);
router.get('/restaurants/:id', getRestaurantById);
router.post('/restaurants', saveRestaurant);
router.post('/restaurants/upload/:id/:name/:alley', multer.single('coverImg'), uploadImageRestaurant);
router.patch('/restaurants/:id', updateRestaurant);
router.delete('/restaurants/:id', deleteRestaurant);

export default router;