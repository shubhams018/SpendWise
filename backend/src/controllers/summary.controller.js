const mongoose = require("mongoose");
const expenseModel = require("../models/expense.model");

async function getSummary(req, res) {

    const { from, to } = req.query;
    const match = {
    user: new mongoose.Types.ObjectId(req.user)
};
      if (from || to){
    match.date = {}

    if (from){
        match.date.$gte = from;
    }
    if (to) {
        match.date.$lte = to;
    }
}

    const result = await expenseModel.aggregate([
        {
            $match: match
        },
            {
            $group: {
                _id : null,
                totalIncome : {
                    $sum : {
                        $cond :[{ 
                            $eq :["$type", "income"]},
                        "$amount",
                        0
                     ]
                    }
                },
                totalExpense : {
                    $sum : {
                        $cond : [{
                            $eq : ["$type", "expense"]},
                        "$amount",
                        0
                        ]
                    }
                }
            }
}]);

    const summary = result[0] || {
            totalIncome: 0,
            totalExpense: 0
        };

    const balance = summary.totalIncome - summary.totalExpense;


    return res.status(200).json({
        message: "Expenses fetched successfully",
        summary : {
            totalIncome : summary.totalIncome,
            totalExpense : summary.totalExpense,
            balance 
        }
    });
}

module.exports = { getSummary };