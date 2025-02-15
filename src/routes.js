const express = require("express");
const playlistController = require("./controllers/playlist-controller");
const router = express.Router();

router.get('/playlists', playlistController.showAllPlaylists);
router.get('/playlist/:id', playlistController.showPlaylist);

router.post('/playlists', playlistController.create);
router.post('/playlists/:id/addMusic', playlistController.addMusic);

router.put('/playlists/:id', playlistController.update);

router.delete('/playlists/:id', playlistController.delete);
router.delete('/playlists/:idPlaylist/removeMusic/:idMusic', playlistController.removeMusic);

module.exports = router;