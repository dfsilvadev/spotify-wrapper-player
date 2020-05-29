'use strict';
import SpotifyWrapper from 'dxp-spotify-api-wrapper';

const spotify = new SpotifyWrapper({
	apiURL: `https://api.spotify.com/v1`,
	token: `BQCzqkpwKS01T3dU9OO8DtFpJDyaSFrAnA2GBdUP5lq4B-LfNUz2CkAMGDH-sI-1gxuNzjHy2YHPTHFiip6mbUPPmtDqRDmt5zr6Fd5gEgedflKRnH8lXwG2WMLMiMI12iLieWOLI0y53pI`
});

export default spotify;
