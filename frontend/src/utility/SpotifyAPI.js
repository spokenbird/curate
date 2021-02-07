import axios from "axios";

const SPOTIFY_SEARCH_URL = "https://api.spotify.com/v1/search";

class SpotifyAPI {
    static async requestSearch(searchParams, token) {
        try {
            let searchRes = await axios(`${SPOTIFY_SEARCH_URL}?q=${searchParams}&type=album,artist,playlist,track`, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            return searchRes.data;
        }
        catch (err) {
            console.error("API ERROR: ", err.response);
            let message = err.response.data.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    static async refreshToken(token) {

    }
}

export default SpotifyAPI;