const express = require("express");
const path = require("path");
const dotenv = require("dotenv")

const app = express();
dotenv.config();
const process = dotenv();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"../public")));

app.get("/", (req, res) => {
    return res.status(200).json({
        message: "hello world",
    })
});
const PORT = 3000 || process.env.PORT
app.listen(PORT,()=>
console.log(`Server is running on http://localhost:${PORT}`));