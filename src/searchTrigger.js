'use strict';
import spotify from './spotify';
import renderAlbum from './albumList';

const albumList = document.querySelector('#album-list');
const searchInput = document.querySelector('#search-input');
const searchForm = document.querySelector('#search-form');

function makeRequest() {
	spotify.search.albums(searchInput.value).then((data) => renderAlbum(data.albums.items, albumList));
}

export default function searchEnterTrigger() {
	searchForm.addEventListener('submit', (e) => {
		e.preventDefault();
		makeRequest();
	});
}
