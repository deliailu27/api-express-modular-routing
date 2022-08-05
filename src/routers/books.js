// Import data here...
const express = require("express");
const { books } = require("../../data");

const booksRouter = express.Router();

// Write routes here...
booksRouter.get("/", (req, res) => {
  res.json({ books });
});

booksRouter.get("/:id", (req, res) => {
  const foundBook = books.find((book) => book.id === Number(req.params.id));

  if (!foundBook) {
    return res.status(404).json({ error: "Book not found" });
  }
  res.json({ book: foundBook });
});

module.exports = booksRouter;
