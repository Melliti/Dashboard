const request = require('request');

_URL_API = "http://api.football-data.org/v2/competitions/FL1/teams";

const data = request({
    headers: {
        'X-Auth-Token': 'de2e972917ec4def8902cb05ac8e7c3b'
        },
        json: true,
        uri: _URL_API,
    }, (err, res, body) => {});

makeRequest = league => {
    console.log(league);
}

exports.footballTeams = data;
