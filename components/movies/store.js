const Model = require("./model");

function addMovie(moviesList) {
  return moviesList.map((movie) => {
    const newMovie = new Model(movie);
    return newMovie.save();
  });
}

function insertManyMovies(moviesList) {
  return Model.insertMany(moviesList);
}

function getMovies() {
  const moviesList = Model.find();
  return moviesList;
}

async function updateMovie(id, tittle) {
  const foundMovie = await Model.findOne({
    _id: id,
  });

  foundMovie.tittle = tittle;

  const newMovie = await foundMovie.save();
  return newMovie;
}

module.exports = {
  add: addMovie,
  get: getMovies,
  update: updateMovie,
  insertMany: insertManyMovies,
};
