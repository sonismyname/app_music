const Song = require('../models/songModel');

exports.getAllSongs = async (req, res) => {
  //get song data
  console.log(req.query);
  try {
    const songs = await Song.find();
    res.status(200).json({
      timeRequest: req.timeRequest,
      results: songs.length,
      data: {
        songs,
      },
    });
  } catch (e) {
    res.status(404).json({
      status: '404 Not',
      error: e.message,
    });
  }
};

exports.createSong = async (req, res) => {
  try {
    const newSong = await Song.create(req.body);
    res.status(201).json({
      timeRequest: req.timeRequest,
      status: 'Created new song successfully',
      data: {
        newSong,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'Error creating song',
      error: err.message,
    });
  }
};
exports.getOneSong = async (req, res) => {
  try {
    const idSong = req.params.id;
    const song = await Song.findById(idSong);
    if (song) {
      res.status(200).json({
        requestTime: req.timeRequest,
        data: {
          song,
        },
      });
    } else {
      res.status(404).json({
        requestTime: req.timeRequest,
        error: 'content not found',
      });
    }
  } catch (err) {
    res.status(400).json({
      status: 'No source available',
      error: err.message,
    });
  }
};

exports.updateSong = async (req, res) => {
  try {
    const idSong = req.params.id;
    const songUpdate = await Song.findByIdAndUpdate(idSong, req.body, {
      runValidators: true,
      new: true,
    });
    if (songUpdate) {
      res.status(202).json({
        requestTime: req.timeRequest,
        status: 'Update successfully',
        data: {
          songUpdate,
        },
      });
    } else {
      res.status(404).json({
        requestTime: req.timeRequest,
        status: 'source not found',
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "Can't not find song or update song",
      error: err.message,
    });
  }
};

exports.deleteSong = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    if (song) {
      await Song.findByIdAndDelete(req.params.id);
      res.status(204).json({
        status: 'Delete successfully',
      });
    } else {
      res.status(404).json({
        message: 'Song not found',
      });
    }
  } catch (err) {
    res.status(404).json({
      status: 'delele song failse',
      message: err.message,
    });
  }
};
