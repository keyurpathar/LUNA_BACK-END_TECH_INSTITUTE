require("dotenv").config();
const app = require("./app");
const connectDB = require("./DB/db");

// db connection 
connectDB()

app.listen(process.env.PORT, () => {
    console.log("server started at http://localhost:5000")
})  