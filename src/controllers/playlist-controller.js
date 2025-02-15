const playlistModel = require("../models/playlist-model")
const uuid = require("uuid").v4;

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
    },

    //DELETE /api/playlists/:id
    delete: (req, res) => {
        const { id } = req.params;

        const removedPlaylist = playlistModel.deletePlaylist(id);

        if(!removedPlaylist){
            return res.status(404).json({ message: "Playlist not found!" });
        }

        res.json(removedPlaylist);
    },

    //POST /api/playlists/:id/addMusic
    addMusic: (req, res) => {
        const { id } = req.params;
        const { title, year, artist, album } = req.body;

        if(typeof title !== "string" || 
            typeof year !== "number" ||
            typeof artist !== "string" ||
            typeof album !== "string")
        {
            return res.status(400).json({ message: "Invalid fields!" })
        }

        const playlist = playlistModel.getPlaylistById(id);

        if(!playlist){
            return res.status(404).json({ message: "Playlist not found!" });
        }

        const newMusic = {
            id: uuid(),
            title,
            year,
            artist,
            album
        }

        playlist.musics.push(newMusic);
        res.json(playlist);
    },

    //DELETE /api/playlists/:idPlaylist/removeMusic/:idMusic
    removeMusic: (req, res) => {
        const { idPlaylist, idMusic } = req.params;
        
        const playlist = playlistModel.getPlaylistById(idPlaylist);

        if(!playlist){
            return res.status(404).json({ message: "Playlist not found!" });
        }

        const musicIndex = playlist.musics.findIndex(music => music.id === idMusic);

        if(musicIndex === -1){
            return res.status(404).json({ message: "Music not found!" });
        }

        playlist.musics.splice(musicIndex, 1);
        res.json(playlist);
    }
}