import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const visitorCounter = new Schema(
    {
        visitorCount: { type: Number, default: 0 }
    }
)

export default mongoose.model('VisitorCounter', visitorCounter);