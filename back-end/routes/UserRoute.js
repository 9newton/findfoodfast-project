import express from "express";
import {
    register,
    login,
} from "../controllers/UserController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

// Error handler
router.use((err, req, res, next) => {
    console.log({ err });
    res
        .status(err.statusCode ? err.statusCode : 503)
        .send(err.message)
        .end();
});

export default router;