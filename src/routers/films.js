const express = require("express");
const { films } = require("../../data");

const filmsRouter = express.Router();

filmsRouter.get("/", (req, res) => {
  res.json({ films });
});

filmsRouter.get("/:id", (req, res) => {
  const foundFilm = films.find((film) => {
    film.id === Number(req.params.id);
  });
  if (!foundFilm) {
    return res.status(404).json({ error: "Movie not found" });
  }
  res.json({ movie: foundFilm });
});

module.exports = filmsRouter;
