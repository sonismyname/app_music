const express = require('express');
const songController = require('../controllers/songControllers');


const songRoute = express.Router();
songRoute
  .route('/')
  .get(songController.getAllSongs)
  .post(songController.createSong);

songRoute
  .route('/:id')
  .get(songController.getOneSong)
  .patch(songController.updateSong)
  .delete(songController.deleteSong);
module.exports = songRoute;
