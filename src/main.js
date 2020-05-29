'use strict';
import spotify from './spotify';
import renderAlbumInfo from './albumInfo';
import renderAlbumTracks from './albumTracks';
import searchEnterTrigger from './searchTrigger';

searchEnterTrigger();

const albumInfo = document.querySelector('#album-info');
const albumTracks = document.querySelector('#album-tracks');

const album = spotify.album.getAlbum('1Yg3QTRv9IGAWeJQb7q8bT');

album
	.then((data) => renderAlbumInfo(data, albumInfo))
	.then((data) => renderAlbumTracks(data.tracks.items, albumTracks));
