import Report from "../models/ReportModel.js";

export const getReports = async (req, res, next) => {
  try {
    const PAGE_SIZE = parseInt(req.query.pageSize);
    const page = parseInt(req.query.page || "0");
    const subjectValid = req.query.subject;
    const categoryValid = req.query.category;
    const sort = parseInt(req.query.sort);
    const filterAndSearch = {
      $and: [
        { subject: { $regex: subjectValid, $options: "i" } },
        { category: { $regex: categoryValid, $options: "i" } },
      ],
    };
    const total = await Report.countDocuments(filterAndSearch);
    const report = await Report.find(filterAndSearch)
      .skip(PAGE_SIZE * page)
      .limit(PAGE_SIZE)
      .sort({ created_at: sort });

    const result = { totalPages: Math.ceil(total / PAGE_SIZE), data: report };

    res.json(result);
    // Report.find(filterAndSearch)
    //   .skip(PAGE_SIZE * page)
    //   .limit(PAGE_SIZE)
    //   .sort({ created_at: sort })
    //   .exec((err, result) => {
    //     if (err) {
    //       return res.status(500).json({ error: err });
    //     }
    //     res.json({
    //       totalPages: Math.ceil(total / PAGE_SIZE),
    //       data: result,
    //     });
    //   });
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