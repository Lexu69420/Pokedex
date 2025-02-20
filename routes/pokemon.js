const express = require("express");
const axios = require("axios");

const router = express.Router();
const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=50";


router.get("/", async (req, res) => {
  try {
    const response = await axios.get(API_URL);
    res.render("pages/home", { pokemonList: response.data.results });
  } catch (error) {
    res.status(500).send("Error fetching Pokémon data");
  }
});


router.get("/search", async (req, res) => {
  try {
    const { name } = req.query;
    if (!name) return res.redirect("/");

    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
    res.render("pages/details", { pokemon: response.data });
  } catch (error) {
    res.status(404).send("Pokémon not found");
  }
});


router.get("/pokemon/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    res.render("pages/details", { pokemon: response.data });
  } catch (error) {
    res.status(500).send("Pokémon not found");
  }
});

module.exports = router;