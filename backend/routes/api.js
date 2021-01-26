/** Defines the API endpoints for the Application **/

const express = require('express');
const router = new express.Router();
const cors = require('cors');
const axios = require('axios');
const querystring = require('querystring');
const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = require('../config');


router.get('/token', cors(), async function(req, res, next) {
    try {
        let tokenReq = await axios({
            method: 'post',
            url: 'https://accounts.spotify.com/api/token',
            data: querystring.stringify({
                grant_type: 'client_credentials'
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization:
                    'Basic ' +
                    Buffer.from(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET).toString('base64')
            }
        });

        let token = tokenReq.data;
        console.log("Success! Your token is: ", token);
        return res.json(token);
    }
    catch (err) {
        return next(err);
    }
});

router.get('/search', cors(), async function(req, res, next) {
    try {
        let searchReq = await axios({
            method: 'get',
            url: 'https://api.spotify.com/v1/search',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: 'BQDRHhNEtqy_VIFBPdXVdpZ2iiXjGZW4um87YXLg_hx7vkis9Ng5STnmsgkTPlwatIj1w9RWeXF1IgQebAI'
            }
        });

        return res.json(searchReq);
    }
    catch (err){
        return next(err);
    }
});

module.exports = router;