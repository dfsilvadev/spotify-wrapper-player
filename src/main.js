'use strict';
import spotify from './spotify';
import renderAlbum from './albumList';
import renderAlbumInfo from './albumInfo';

const albums = spotify.search.albums('Zé Neto e Cristiano');
const albumList = document.querySelector('#album-list');

const album = spotify.album.getAlbum('1Yg3QTRv9IGAWeJQb7q8bT');
const albumInfo = document.querySelector('#album-info');

albums.then((data) => renderAlbum(data.albums.items, albumList));
album.then((data) => renderAlbumInfo(data, albumInfo));
