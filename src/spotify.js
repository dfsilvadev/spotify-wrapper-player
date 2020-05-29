'use strict';
import SpotifyWrapper from 'dxp-spotify-api-wrapper';

const spotify = new SpotifyWrapper({
	apiURL: `https://api.spotify.com/v1`,
	token: `BQBrF4Dt_WeQiLJDNhjr2HzTbHRgvTKZjFUHJbk8hJzO9QKwZ4NFpahsJF4dUAkw6Kh3p5y3wgQACOslYj4djBNrxWet2tTSUtKOYUcBawJEuQEO9bdqIEUxTOo1Ib4G7PGhRfnEo9aCQgI`
});

export default spotify;
