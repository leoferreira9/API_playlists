const playlistModel = require("../models/playlist-model")

module.exports = {
    // GET /api/playlists
    showAllPlaylists: (req, res) => {
        const playlists = playlistModel.getAllPlaylists();
        
        if(!playlists){
            return res.status(404).json({ message: "Playlists not found!" });
        }

        res.json(playlists);
    },

    //GET /api/playlist/:id
    showPlaylist: (req, res) => {
        const { id } = req.params;

        const playlist = playlistModel.getPlaylistById(id);

        if(!playlist){
            return res.status(404).json({ message: "Playlist not found!" });
        }

        res.json(playlist);
    },

    //POST /api/playlists
    create: (req, res) => {
        const { name, tags} = req.body;

        if(typeof name !== "string") return res.status(400).json({ message: "Name must be of type 'string'! "})
        if(!Array.isArray(tags) || tags.length === 0) return res.status(400).json({ message: "Tags must be an array not empty!" })

        const newPlaylist = playlistModel.createPlaylist(name, tags);

        if(!newPlaylist){
            res.status(400).json({ message: "Failed to create playlist!" });
        }

        res.json(newPlaylist);
    },

    //PUT /api/playlists/:id
    update: (req, res) => {
        const { id } = req.params;
        const { name, tags } = req.body;

        const playlist = playlistModel.getPlaylistById(id);

        if(!playlist){
            return res.status(404).json({ message: "Playlist not found!" });
        }
        
        if(typeof name === "string"){
            playlist.name = name;
        }

        if(Array.isArray(tags) && tags.length > 0){
            playlist.tags = tags;
        }

        res.json(playlist);
    }
}