const uuid = require("uuid").v4;

let playlists = [
    {id: "1", name: "Nacionais", tags: ['pop', 'rock'], musics: [{id: 1, title: 'Valentine', year: 2022, artist: 'Kupla', album: "Lofi"}, {id: 2, title: 'Hope', year: 2024, artist: 'Bcalm', album: "Lofi to study"}]},
    {id: "2", name: "Internacionais", tags: ['rap', 'eletronic'], musics: []}
];

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
    }
}