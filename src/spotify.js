'use strict';
import SpotifyWrapper from 'dxp-spotify-api-wrapper';

const spotify = new SpotifyWrapper({
	apiURL: `https://api.spotify.com/v1`,
	token: `BQAC8nNSEcKFP-0OpYaMwN-GNOjWSxkT87MgQ0jAVzwWzPnMrIxS2TRSNUfC3W6KNchNLMmFKxffhC64ENPSyNtKH2SedGnBJz-t1RR-4dOGdBhGjR4OENMReEj6-VYKG8j3OKW3TTh-8-0`
});

export default spotify;
