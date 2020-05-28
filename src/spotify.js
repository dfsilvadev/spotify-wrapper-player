'use strict';
import SpotifyWrapper from 'dxp-spotify-api-wrapper';

const spotify = new SpotifyWrapper({
	apiURL: `https://api.spotify.com/v1`,
	token: `BQCEJ4P0cPSUC4F2WvaFo9fwllV2U_PUjiDgOeEU3jFLlA4eUxdMawKweO8Ut8FdtGwEvMfeiAj__HNCFnkwslX-HYndgPsUhUNLDTzvjasEv2tjO6bwiMhiBWnbfd8dEvR01jStTXkjE5s`
});

export default spotify;
