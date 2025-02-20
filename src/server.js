const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();
const port = 8000;
const pokemonRoutes = require("../routes/pokemon");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "../public")));


app.use("/", pokemonRoutes);

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));