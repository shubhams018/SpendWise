const express = require("express");
const cors = require("cors");
const authRoutes = require("../src/routes/auth.routes");
const userRoutes = require("../src/routes/user.routes");
const expenseRoutes = require("../src/routes/expense.routes");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middlewares/error.middleware");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin:[ 
        "http://localhost:5173",
        "https://spendwise-frontend-7l33.onrender.com"
    ],
    credentials: true
}));

app.use("/api/auth",authRoutes);
app.use("/api/user",userRoutes);
app.use("/api/expense",expenseRoutes);

app.use(errorMiddleware);

app.get("/", (req, res) => {
    res.status(200).json({
        message: "SpendWise API is running"
    });
});

module.exports = app;