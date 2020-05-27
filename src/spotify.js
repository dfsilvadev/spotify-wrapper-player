'use strict';
import SpotifyWrapper from 'dxp-spotify-api-wrapper';

const spotify = new SpotifyWrapper({
	apiURL: `https://api.spotify.com/v1`,
	token: `BQDJMPb0qfwD-er-2Qzkvems26XSK4NotjtTCbGj1snhpbIVmPehE7KsOBo215XGfiIu8letvD9uBvX4fVtInchE2LBa0aEUIuuhq5gYJsvLjRXmj0cput9X9YxXZyjChiCaGmVZYIZqzzg`
});

export default spotify;
