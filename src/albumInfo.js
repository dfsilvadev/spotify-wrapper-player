'use strict';
export default function renderAlbumInfo(data, element) {
	const markup = `
        <img class="album-image" src="${data.images[0]}" alt="${data.name}">
        <span class="padding">
            <p class="album-title">${data.name}</p>
            <p class="album-artist">${data.artists[0].name}</p>
            <p class="album-counter">${data.tracks.total} Músicas</p>
        </span>
    `;
	element.innerHTML = markup;
}
