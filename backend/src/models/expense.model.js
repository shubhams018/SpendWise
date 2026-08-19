const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    title: {
        type: String,
        required: true
    },

    amount: {
        type: Number,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    type: {
        type: String,
        required: true,
        enum: ["income", "expense"]
    },

    date: {
        type: Date,
        required: true
    }
}, {
    timestamps: true
});

const expenseModel = mongoose.model("Expense", expenseSchema);

module.exports = expenseModel;