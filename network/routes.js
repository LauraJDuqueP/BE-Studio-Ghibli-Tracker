const express = require('express');
const movies = require('../components/movies/network');

const routes = function (server) {
    server.use('/movietest', movies);
}

module.exports = routes;