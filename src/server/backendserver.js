const axios = require('axios')
const express = require('express')
const request = require('request')
const app = express()
const fs = require('fs')


var client_id;
var client_secret;

const vars = require('fs').readFileSync('token.txt', 'utf-8').split(/\r?\n/)
client_id = vars[0];
client_secret = vars[1];

// your application requests authorization
var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {

    // use the access token to access the Spotify Web API
    var token = body.access_token;
    var options = {
      url: 'https://api.spotify.com/v1/users/chaosperfect',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      json: true
    };
    request.get(options, function(error, response, body) {
      console.log(body);
    });
  }
});



app.get('/', (req, res) => {

})
app.listen(3000, () => console.log('Example app is listening on port 3000.'));
