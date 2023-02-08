import VisitorCounter from "../models/VisitorCounterModel.js";

export const getVisitorCount = async (req, res, next) => {
    try {
        const visitorCount = await VisitorCounter.find();
        res.status(200).send(visitorCount).end();
    } catch (error) {
        next(error);
    }
};

export const countVisits = async (req, res, next) => {
    try {
        const visitorCounter = await VisitorCounter.findOne();
        if (!visitorCounter) {
            const newVisitorCounter = new VisitorCounter({ visitorCount: 1 });
            await newVisitorCounter.save();
        } else {
            visitorCounter.visitorCount += 1;
            await visitorCounter.save();
        }
        res.status(200).send({ message: "Visitor count updated successfully." }).end();
    } catch (error) {
        next(error);
    }
};

