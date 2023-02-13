import express from "express";
import {
    getVisitorCount,
    countVisits,
} from "../controllers/VisitorCounterController.js";

const router = express.Router();

router.get("/visitor", getVisitorCount);
router.post("/countVisitsWeb", countVisits);

// Error handler
router.use((err, req, res, next) => {
    console.log({ err });
    res
        .status(err.statusCode ? err.statusCode : 503)
        .send(err.message)
        .end();
});

export default router;