const moviesMocks = require("./mocks/moviesMocks");

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("home");
});
app.get("/movies", (req, res) => {
  res.status(200).send(moviesMocks);
});

app.listen(3000, () => console.log(`server running on http://localhost:3000`));
