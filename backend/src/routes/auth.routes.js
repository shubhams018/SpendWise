const express = require("express");
const userModel = require("../models/user.model");
const authController = require("../controllers/auth.controller");
const validationResult = require("../validators/auth.validator")

const router = express.Router();



router.post("/register",validationResult.registerUserRules, authController.registerUser);
router.post("/login",validationResult.loginUserRules, authController.loginUser);
router.post("/logout", authController.logoutUser);
module.exports = router;