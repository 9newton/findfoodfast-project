import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const user = new Schema(
    {
        username: { type: String, unique: true },
        password: { type: String },
        token: { type: String }
    }
)

export default mongoose.model('Users', user);