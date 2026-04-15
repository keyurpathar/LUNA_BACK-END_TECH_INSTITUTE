require("dotenv").config();
const app = require("./app");
const connectDB = require("./DB/db");

connectDB()

app.listen(process.env.PORT, () => {
    console.log("server started at http://localhost:5000")
})  