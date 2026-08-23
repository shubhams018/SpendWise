const app = require("./src/app");

require("dotenv").config();

const connectDB = require("./src/db/db");

connectDB();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});