'use strict';
import spotify from './spotify';
import renderAlbumInfo from './albumInfo';
import renderAlbumTracks from './albumTracks';

const listAlbums = document.querySelector('#album-list');
const albumInfo = document.querySelector('#album-info');
const albumTracks = document.querySelector('#album-tracks');

function makeRequest(albumId) {
	spotify.album
		.getAlbum(albumId)
		.then((data) => renderAlbumInfo(data, albumInfo))
		.then((data) => renderAlbumTracks(data.tracks.items, albumTracks));
}

export default function selectAlbumTrigger() {
	listAlbums.addEventListener('click', (e) => {
		const target = e.target;
		e.preventDefault();
		makeRequest(target.getAttribute('data-album-id'));
	});
}
