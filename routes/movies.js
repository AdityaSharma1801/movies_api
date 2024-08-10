const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

// 1. Get All Movies
router.get('/', async (req, res) => {
  const movies = await Movie.find();
  res.status(200).send(movies);
});

// 2. Get Movie by ID
router.get('/:id', async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  if (!movie) return res.status(404).send('Movie not found.');
  res.status(200).send(movie);
});

// 3. Get Movie by Name
router.get('/name/:title', async (req, res) => {
  const movie = await Movie.findOne({ title: req.params.title });
  if (!movie) return res.status(404).send('Movie not found.');
  res.status(200).send(movie);
});

module.exports = router;
