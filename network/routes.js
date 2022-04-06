const express = require('express');
const movies = require('../components/movies/network');

const routes = function (server) {
    server.use('/movies', movies);
}

module.exports = routes;