'use strict';
import spotify from './spotify';
import renderAlbum from './albumList';
import renderAlbumInfo from './albumInfo';
import renderAlbumTracks from './albumTracks';
const albumList = document.querySelector('#album-list');
const albumInfo = document.querySelector('#album-info');
const albumTracks = document.querySelector('#album-tracks');

const albums = spotify.search.albums('Zé Neto e Cristiano');
const album = spotify.album.getAlbum('1Yg3QTRv9IGAWeJQb7q8bT');

albums.then((data) => renderAlbum(data.albums.items, albumList));
album
	.then((data) => renderAlbumInfo(data, albumInfo))
	.then((data) => renderAlbumTracks(data.tracks.items, albumTracks));
