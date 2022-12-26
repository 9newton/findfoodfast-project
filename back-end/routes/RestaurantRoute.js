import express from "express";
import { 
    getRestaurants, 
    getRestaurantById,
    saveRestaurant,
    updateRestaurant,
    deleteRestaurant
} from "../controllers/RestaurantController.js";

const router = express.Router();

router.get('/restaurants', getRestaurants);
router.get('/restaurants/:id', getRestaurantById);
router.post('/restaurants', saveRestaurant);
router.patch('/restaurants/:id', updateRestaurant);
router.delete('/restaurants/:id', deleteRestaurant);

export default router;