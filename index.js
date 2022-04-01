const express = require("express");

const moviesMocks = require("./mocks/moviesMocks");
const router = require('./network/routes');

const app = express();
router(app);

app.get("/movies", (req, res) => res.send(moviesMocks));

app.listen(3000, () => console.log(`server running on http://localhost:3000`));
