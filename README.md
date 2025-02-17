# Playlist API 🎶
Este é um projeto de uma API simples para gerenciar playlists e músicas. A API permite a criação, leitura, atualização e remoção de playlists e músicas dentro delas.

## 🛠️ Tecnologias Utilizadas
- **Node.js**
- **Express**
- **UUID** (Biblioteca geradora de IDs)
- **Dotenv** (Biblioteca para gerenciar variáveis de ambiente)


## 🔧 Instalação

  **1° Clone o repositório:**
  - git clone https://github.com/leoferreira9/API_playlists

   **2° Entre na pasta do projeto:**
   - cd API_playlists

  **3° Instale as dependências:**
  - npm install
    
  **4°(opcional) Crie o arquivo .env na raiz do projeto e adicione a variável de ambiente:**
  - PORT=3000 (ou outra porta)

  **5° Execute o servidor:**
  - npm start

# 📄 Endpoints
## Playlists
  - **GET** /api/playlists - Retorna todas as playlists
  - **GET** /api/playlists/:id - Retorna uma playlist específica
  - **POST** /api/playlists - Cria uma nova playlist
  - **PUT** /api/playlists/:id - Atualiza uma playlist existente
  - **DELETE** /api/playlists/:id - Deleta uma playlist
## Musicas
  - **POST** /api/playlists/:id/addMusic - Adiciona uma nova música à playlist
  - **DELETE** /api/playlists/:idPlaylist/removeMusic/:idMusic - Remova uma música da playlist

# Corpo de uma Playlist
```json
{
  "name": "Minha Playlist",
  "tags": ["pop", "indie"],
  "musics": []
}
```


# Corpo de uma Música
```json
{
  "title": "Música A",
  "year": 2023,
  "artist": "Artista A",
  "album": "Álbum A"
}
```
