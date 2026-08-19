const { body, query, validationResult } = require("express-validator");

async function validateResult(req, res, next) {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }

    next();
}

const createExpenseRules = [

    body("title")
        .isString()
        .withMessage("Title must be a string")
        .isLength({ min: 3, max: 50 })
        .withMessage("Title must be between 3 and 50 characters"),

    body("amount")
        .notEmpty()
        .withMessage("Amount is required")
        .isFloat({ min: 0.01 })
        .withMessage("Amount must be greater than 0"),

    body("category")
        .isString()
        .withMessage("Category must be a string")
        .isLength({ min: 3, max: 50 })
        .withMessage("Category must be between 3 and 50 characters"),

    body("type")
        .isIn(["expense", "income"])
        .withMessage("Type must be either expense or income"),

    body("date")
        .isDate()
        .withMessage("Invalid date"),

    validateResult
];


const updateExpenseRules = [
     body("title")
        .optional()
        .isString()
        .withMessage("Title must be a string")
        .isLength({ min: 3, max: 50 })
        .withMessage("Title must be between 3 and 50 characters"),

    body("amount")
        .optional()
        .notEmpty()
        .withMessage("Amount is required")
        .isFloat({ min: 0.01 })
        .withMessage("Amount must be greater than 0"),

    body("category")
        .optional()
        .isString()
        .withMessage("Category must be a string")
        .isLength({ min: 3, max: 50 })
        .withMessage("Category must be between 3 and 50 characters"),

    body("type")
        .optional()
        .isIn(["expense", "income"])
        .withMessage("Type must be either expense or income"),

    body("date")
        .optional()
        .isDate()
        .withMessage("Invalid date"),

    validateResult
];


const getExpenseRules = [

    query("category")
    .optional()
    .isString()
    .withMessage("Category must be a string"),

    query("type")
        .optional()
        .isIn(["expense", "income"])
        .withMessage("Invalid type"),

    query("title")
        .optional()
        .isString()
        .withMessage("Title must be a string"),

    query("from")
        .optional()
        .isDate()
        .withMessage("Invalid from date"),

    query("to")
        .optional()
        .isDate()
        .withMessage("Invalid to date"),

    query("sort")
        .optional()
        .isIn(["newest", "oldest"])
        .withMessage("Sort must be newest or oldest"),query("sort")
        .optional()
        .isIn(["newest", "oldest"])
        .withMessage("Sort must be newest or oldest"),

        validateResult
    ];

module.exports = { 
    createExpenseRules, updateExpenseRules, getExpenseRules
};