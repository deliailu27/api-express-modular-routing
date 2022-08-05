const express = require("express");

const { users } = require("../../data");
const usersRouter = express.Router();

usersRouter.get("/users", (req, res) => {
  res.json({ users });
});

usersRouter.get("/:id", (req, res) => {
  const foundUser = users.find((user) => user.id === Number(req.params.id));

  if (!foundUser) {
    return res.status(404).json({ error: "User not found" });
  }
  res.json({ user: foundUser });
});

module.exports = usersRouter;
