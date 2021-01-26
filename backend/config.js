/** Shared config for application; can be required many places. */

const dotenv = require('dotenv');
dotenv.config();


module.exports = {
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
    PORT: process.env.PORT
};