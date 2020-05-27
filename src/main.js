'use strict';
import spotify from './spotify';
import renderAlbum from './albumList';

const albums = spotify.search.albums('Zé Neto e Cristiano');
const albumList = document.querySelector('#album-list');
albums.then((data) => renderAlbum(data.albums.items, albumList));
