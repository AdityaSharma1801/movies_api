const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  genre: String,
  releaseDate: Date,
  rating: Number,
});

const Movies_data = mongoose.model('Movie', movieSchema);

module.exports = Movies_data;
