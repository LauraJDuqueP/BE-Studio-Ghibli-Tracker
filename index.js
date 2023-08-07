const moviesMocks = require("./mocks/moviesMocks");
const express = require("express");

const PORT = process.env.PORT||3000
const app = express();

app.get("/movies", (req, res) => res.send(moviesMocks));

app.listen(PORT, () => console.log(`server running on http://localhost:3000`));
