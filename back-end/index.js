import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import RestaurantRoute from "./routes/RestaurantRoute.js";
import ReportRoute from "./routes/ReportRoute.js";

const app = express();
mongoose.connect("mongodb://localhost:27017/findfoodfastDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database Connected..."));

app.use(cors());
app.use(express.json());
app.use(RestaurantRoute);
app.use(ReportRoute);

app.listen(5000, () => console.log("Server up and running... port: 5000"));