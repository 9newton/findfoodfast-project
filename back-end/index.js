import express from "express";
import dotenv from 'dotenv';
dotenv.config();
import cors from "cors";
import http from 'http';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import auth from './middleware/auth.js';
// import http from 'http';

import connect from './config/database.js';

// Models
import RestaurantRoute from "./routes/RestaurantRoute.js";
import ReportRoute from "./routes/ReportRoute.js";
import UserRoute from './routes/UserRoute.js';

const app = express();


connect();
app.use(cors());
app.use(express.json());
app.use(RestaurantRoute);
app.use(ReportRoute);
app.use(UserRoute);


const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;
const server = http.createServer(app);

//server listening
server.listen(port, () => {
  console.log(`Server running on port ➜  ${port}`);
});