'use strict';
import SpotifyWrapper from 'dxp-spotify-api-wrapper';

const spotify = new SpotifyWrapper({
	apiURL: `https://api.spotify.com/v1`,
	token: `BQCmPwBaIltjeHFN5LELRaFcNs3GyU3OMUe6XhzBFsjt25j4maBQEvuVeyxcF5_gJF3u2Dz0y-CGPJ7qG_bEsgL4yqGfntMMo4KeWbsE9VhECMDKpQrpSCMQJ-_uF9t71Zkztkdezt_FPtA`
});

export default spotify;
