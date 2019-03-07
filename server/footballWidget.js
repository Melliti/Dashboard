const request = require('request');
const unirest = require('unirest');

_URL_API = "http://api.football-data.org/v2/competitions/FL1/teams";

const data = request({
    headers: {
        'X-Auth-Token': 'de2e972917ec4def8902cb05ac8e7c3b'
        },
        json: true,
        uri: _URL_API,
    }, function (err, res, body) {
        console.log(body)
    });

exports.footballTeams = data;