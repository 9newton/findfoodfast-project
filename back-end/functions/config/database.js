import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const { MONGO_URI } = process.env;

export const connect = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Successfully connected to database 🟢");
    } catch (error) {
        console.log("Error connecting to database 🔴");
        console.log(error);
        process.exit(1);
    }
};
export default connect;