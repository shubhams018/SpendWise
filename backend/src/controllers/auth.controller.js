const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");





async function registerUser(req, res) {

    const {username, email, password} = req.body;

const existingUser = await userModel.findOne({
    $or: [
        { email },
        { username }
    ]
});

if (existingUser) {
    return res.status(409).json({
        message: "Username or email already exists"
    });
}

     const hash = await bcrypt.hash(password, 10);
      const user = await userModel.create({
        username,
         email, 
         password : hash, 
        
    });

      const token = jwt.sign({
        id : user._id,
    }, process.env.JWT_SECRET)

    res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax"
});


      res.status(201).json({
        message: "user registered successfully",
        user: {
            id: user._id,
            username : user.username,
            email : user.email,
        }
    });

}

async function loginUser(req, res) {

    const { identifier, password } = req.body;

    const user = await userModel.findOne({
        $or: [
            { email : identifier },
            { username : identifier }
        ]
    });

    if (!user) {
        return res.status(401).json({
            message: "Invalid username or email"
        });
    }

    const isPasswordValid = await bcrypt.compare(
        password,
        user.password
    );

    if (!isPasswordValid) {
        return res.status(401).json({
            message: "Invalid password"
        });
    }

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET);

    res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "none"
});

    return res.status(200).json({
        message: "Logged in successfully",
        user: {
            username: user.username,
            email: user.email
        }
    });
}

async function logoutUser(req, res) {

    res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax"
});
    return res.status(200).json({
        message: "Logged out successfully"
    });
}

module.exports = {registerUser, loginUser, logoutUser}