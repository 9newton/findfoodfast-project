import express from "express";
import {
  getReports,
  getReportsById,
  saveReport,
  deleteReport,
  resetRating,
} from "../controllers/ReportController.js";

const router = express.Router();

router.get("/reports", getReports);
router.get("/reports/:id", getReportsById);
router.post("/reports", saveReport);
router.delete("/reports/:id", deleteReport);
router.put("/reports/resetRating", resetRating);

// Error handler
router.use((err, req, res, next) => {
  console.log({ err });
  res
    .status(err.statusCode ? err.statusCode : 503)
    .send(err.message)
    .end();
});

export default router;