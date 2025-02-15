const uuid = require("uuid").v4;

let playlists = [];

//Exemplo do corpo de uma Playlist { id, name, tags = [], musics = [] }
//Exemplo do corpo de uma Música { id, title, year, artist, album }

module.exports = {
    getAllPlaylists(){
        return playlists;
    },

    getPlaylistById(id){
        return playlists.find(playlist => playlist.id === id);
    },

    createPlaylist(name, tags, musics){
        const newPlaylist = {
            id: uuid(),
            name,
            tags,
            musics: []
        }

        playlists.push(newPlaylist);
        return newPlaylist;
    },

    deletePlaylist(id){
        const playlistIndex = playlists.findIndex(playlist => playlist.id === id);

        if(playlistIndex === -1){
            return null;
        }

        const removedPlaylist = playlists.splice(playlistIndex, 1);
        return removedPlaylist;
    }
}