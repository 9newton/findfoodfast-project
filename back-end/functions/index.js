
import express from "express";
import dotenv from 'dotenv';
dotenv.config();
import cors from "cors";
import http from 'http';

import connect from './config/database.js';

// Models
import RestaurantRoute from "./routes/RestaurantRoute.js";
import ReportRoute from "./routes/ReportRoute.js";
import UserRoute from './routes/UserRoute.js';
import VisitorCounterRoute from './routes/VisitorCounterRoute.js';
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const functions = require("firebase-functions");

const app = express();


connect();
app.use(cors());
app.use(express.json());
app.use(RestaurantRoute);
app.use(ReportRoute);
app.use(UserRoute);
app.use(VisitorCounterRoute);


const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;
const server = http.createServer(app);

//server listening
server.listen(port, () => {
    console.log(`Server running on port ➜  ${port}`);
});

const findFood = functions.https.onRequest(app);
export default findFood