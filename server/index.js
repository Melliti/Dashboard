const express = require('express');
const cors = require('cors');
const footballTeams = require('./footballWidget');

const app = express();

app.use(cors());

app.get('/teams', async (req, res) => {
    const data = await footballTeams.makeRequest("FL1")
    return res.json({
        data: data.teams
    });
});

app.get('/teams/:id', async (req, res) => {
    const data = await footballTeams.makeRequest(req.params.id)
    console.log(data)
    return res.json({
    data: data.teams
    });
});

app.listen(4000, () => {
    console.log("Listening on port 4000");
});