const mongoose = require("mongoose");
const expenseModel = require("../models/expense.model");

async function getMonthlySummary(req, res) {

    const { from, to } = req.query;

    const match = {
                user: new mongoose.Types.ObjectId(req.user),
                type: "expense"
            }

{
     if (from || to) {
            match.date = {};

            if (from) {
                match.date.$gte = new Date(from);
            }

            if (to) {
                const endDate = new Date(to);
                endDate.setHours(23, 59, 59, 999);

            match.date.$lte = endDate;
        }
     }
}



    const result = await expenseModel.aggregate([ 
        {
            $match: match
        },
        {
            $group: {
                _id: {
                    year: { $year: "$date" },
                    month: { $month: "$date" }
                },
                total: {
                    $sum: "$amount"
                }
            }
        },
        {
            $project: {
                _id: 0,
                year: "$_id.year",
                month: "$_id.month",
                total: 1
            }
        }
    ]);

    return res.status(200).json({
        message: "Monthly summary fetched successfully",
        result
    });
}


module.exports = { getMonthlySummary };