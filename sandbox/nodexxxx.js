//https://gist.githubusercontent.com/setapolo/f07555072ece3e8311bcfe9fe6aa18ff/raw/d8c28b980e0b10f9f526d24af26fc01001aeabd5/fasborn.json

//node time!!

var request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

