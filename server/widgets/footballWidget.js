const rp = require('request-promise')

_URL_API = "http://api.football-data.org/v2/competitions/FL1/teams";



module.exports = {
    makeRequest: function(param)  {
        return rp({
            uri: "http://api.football-data.org/v2/competitions/" + param + "/teams",
            headers: {
                'X-Auth-Token': 'de2e972917ec4def8902cb05ac8e7c3b'
                },
            json: true,
            });
    }
}
