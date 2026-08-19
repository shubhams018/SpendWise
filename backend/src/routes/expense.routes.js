const express = require("express");
const expenseModel = require("../models/expense.model");
const expenseController = require("../controllers/expense.controller");
const { authMiddleware } = require("../middlewares/auth.middleware");
const validationResult = require("../validators/expense.validator");
const summaryController = require("../controllers/summary.controller");
const categoryController = require("../controllers/category.controller");
const monthlyController = require("../controllers/monthly.controller");


const router = express.Router();



router.post("/",authMiddleware, validationResult.createExpenseRules, expenseController.createExpense);
router.get("/",authMiddleware,validationResult.getExpenseRules, expenseController.getExpenses);
router.delete("/:id",authMiddleware, expenseController.deleteExpense);
router.patch("/:id",authMiddleware, validationResult.updateExpenseRules, expenseController.updateExpense);
router.get("/summary",authMiddleware, summaryController.getSummary);
router.get("/category-summary",authMiddleware, categoryController.getCategorySummary);
router.get( "/monthly-summary", authMiddleware, monthlyController.getMonthlySummary);
router.get("/:id",authMiddleware, expenseController.getExpense);


module.exports = router;