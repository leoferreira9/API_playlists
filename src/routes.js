const express = require("express");
const playlistController = require("./controllers/playlist-controller");
const router = express.Router();

router.get('/playlists', playlistController.showAllPlaylists);
router.get('/playlist/:id', playlistController.showPlaylist);

router.post('/playlists', playlistController.create);

module.exports = router;