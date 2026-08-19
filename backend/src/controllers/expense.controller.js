const expenseModel = require("../models/expense.model");

    async function createExpense(req, res) {

    const { title, amount, category, type, date } = req.body;


    const expense = await expenseModel.create({
        user : req.user,
            title ,
            amount, 
            category,
            type, 
            date
        
    })

        res.status(201).json({
            message : "Expense created"
        })
    }

   async function getExpenses(req, res) {

    const { category, type, title, from , to, page , limit,  sort = "newest" } = req.query;

    const filter = {
        user: req.user
    };

    if (category) {
        filter.category = { 
            $regex: `^${category}$`,
            $options: "i"
        }
}
    if (type) {
        filter.type = type;
    }

    if (title) {
        filter.title = title;
    }

    if (from || to){
    filter.date = {};

    if (from){
        filter.date.$gte = new Date(from);
    }
    if (to) {
        const toDate = new Date(to);
        toDate.setHours(23, 59, 59, 999);
        filter.date.$lte = toDate;
    }

}
    const pageNumber = Number(page);
    const limitNumber = Number(limit);
    const skip = (pageNumber - 1) * limitNumber;
    const sortOrder = sort === "oldest" ? 1 : -1;

    const expenses = await expenseModel.find(filter)
    .sort({ date: sortOrder, createdAt: sortOrder })
    .skip(skip)
    .limit(limitNumber);

    const totalExpenses = await expenseModel.countDocuments(filter);
    const totalPages = Math.ceil(totalExpenses / limitNumber);

    return res.status(200).json({
        message: "Expenses fetched successfully",
        expenses,
        pagination : {
            currentPage : pageNumber,
            limit : limitNumber,
            totalExpenses,
            totalPages 
        }
    });
}

    async function deleteExpense(req, res) {

    const user = req.user;
    const id = req.params.id;

    const deletedExpense = await expenseModel.findOneAndDelete({
        _id: id,
        user: user
    });

    if (!deletedExpense) {
        return res.status(404).json({
            message: "Expense not found"
        });
    }

    return res.status(200).json({
        message: "Expense deleted successfully"
    });
}

    async function updateExpense(req, res) {

    const user = req.user;
    const id = req.params.id;
    const updates = req.body;

    const updatedExpense = await expenseModel.findOneAndUpdate(
        {
            _id: id,
            user: user
        },
        updates,
        {
            new: true
        }
    );

    if (!updatedExpense) {
        return res.status(404).json({
            message: "Expense not found"
        });
    }

    return res.status(200).json({
        message: "Expense updated successfully",
        updates: updatedExpense
    });
}

async function getExpense(req, res) {

    const user = req.user;
    const { id } = req.params;
    const expense = await expenseModel.findOne({
        _id: id,
        user: user
    });

    return res.status(200).json({
        message : "Expense fetched successfully",
        expense
    })
}



module.exports = { createExpense, getExpenses, deleteExpense, updateExpense, getExpense };