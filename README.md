# Curate - Spotify Playlist Enricher

Curate is a platform that lets users enrich their Spotify playlist data with key and BPM.

## Setup
 
### Backend

1. Sign up for a [Spotify Developer Account](https://developer.spotify.com/)
2. Create a .env file in the root of the /backend directory
3. Add entries for `SPOTIFY_CLIENT_ID=YOUR_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET=YOUR_CLIENT_SECRET` and `PORT=YOUR_DESIRED_PORT`
4. `cd` into /backend directory
5. run `npm install` 
6. run `nodemon` to start

### Frontend

1. `cd` into /frontend directory
2. run `npm install`
3. run `nodemon` to start

## Usage

The backend uses an Express server to complete a Server to Server authorization token request to the Spotify API. The token is then used for subsequent requests the Spotify API.
