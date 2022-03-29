const moviesMocks = require("./mocks/moviesMocks");

const express = require("express");

const app = express();

app.get("/movies", (req, res) => res.send(moviesMocks));

app.listen(3000, () => console.log(`server running on http://localhost:3000`));
