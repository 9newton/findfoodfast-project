import Restaurant from "../models/RestaurantModel.js";
import serviceAccount from '../firebase-config.json' assert { type: "json" };
import admin from 'firebase-admin';
const FirebaseApp = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "gs://fff-project-95ee1.appspot.com"
});
const storage = FirebaseApp.storage();
const bucket = storage.bucket();

export const getRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.json(restaurants);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getRestaurantById = async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);
        res.json(restaurant);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const saveRestaurant = async (req, res) => {
    const restaurant = new Restaurant(req.body);
    try {
        const insertedrestaurant = await restaurant.save();
        res.status(201).json(insertedrestaurant);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updateRestaurant = async (req, res) => {
    try {
        const updatedrestaurant = await Restaurant.updateOne({ _id: req.params.id }, { $set: req.body });
        res.status(200).json(updatedrestaurant);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteRestaurant = async (req, res) => {
    try {
        const deletedrestaurant = await Restaurant.deleteOne({ _id: req.params.id });
        res.status(200).json(deletedrestaurant);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const uploadImageRestaurant = async (req, res) => {
    try {
        const folder = 'restaurant1'
        const fileName = `${folder}/${Date.now()}/1`
        const fileUpload = bucket.file(fileName);
        const blobStream = fileUpload.createWriteStream({
            metadata: {
                contentType: req.file.mimetype
            }
        });

        blobStream.on('error', (err) => {
            res.status(405).json(err);
        });

        blobStream.on("finish", async () => {
            // Get the URL for the uploaded image
            const [url] = await fileUpload.getSignedUrl({
                action: "read",
                expires: "03-09-2491",
            });
            await Restaurant.updateOne({ _id: req.params.id }, { $set: { coverImg: url } });
            console.log(`Image URL: ${url}`);
            res.status(200).send(url);
        });

        blobStream.end(req.file.buffer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}