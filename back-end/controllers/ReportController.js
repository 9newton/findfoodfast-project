import Report from "../models/ReportModel.js";

export const getReports = async (req, res, next) => {
  try {
    const PAGE_SIZE = 5;
    const page = parseInt(req.query.page || "0");
    const total = await Report.countDocuments({});
    const reports = await Report.find({})
      .limit(PAGE_SIZE)
      .skip(PAGE_SIZE * page);
    res.json({
      totalPages: Math.ceil(total / PAGE_SIZE),
      reports,
    });
    res.status(200).send(reports).end();
  } catch (error) {
    next(error);
  }
};

export const getReportsById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const report = await Report.findById(id);
    res.status(200).send(report).end();
  } catch (error) {
    next(error);
  }
};

export const saveReport = async (req, res, next) => {
  const report = new Report(req.body);
  try {
    const insertedreport = await report.save();
    res.status(201).send(insertedreport).send();
  } catch (error) {
    next(error);
  }
};

export const updateReport = async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const report = await Report.updateOne({ _id: id }, { $set: body });
    res.status(200).send(report);
  } catch (error) {
    next(error);
  }
};

export const deleteReport = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedReport = await Report.deleteOne({
      _id: id,
    });
    res.status(200).send(deletedReport).end();
  } catch (error) {
    next(error);
  }
};
