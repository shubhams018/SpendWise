const { body,  validationResult } = require('express-validator');


async function validateResult(req, res , next) {
    
    const errors = validationResult(req);
  
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors : errors.array()
        });
    }

    next();
}


const registerUserRules = [

    body("username")
    .isString()
    .withMessage("Username must be string")
    .isLength({min :3,max : 20})
    .withMessage("Username must between 3 and 20 characters"),

     body("email")
    .isEmail()
    .withMessage("Invalid email address"),

     body("password")
    .isLength({min : 6})
    .withMessage("Password must have atleast 6 characters"),
   
    validateResult
]

const loginUserRules = [

    body("identifier")
    .isString()
    .withMessage("Username or email required")
    .notEmpty()
    .withMessage("Username or email cannot be empty"),

     body("password")
    .isLength({min : 6})
    .withMessage("Password must have atleast 6 characters"),
   
    validateResult
]


module.exports = {
    registerUserRules, loginUserRules
} 