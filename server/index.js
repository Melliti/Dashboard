const express = require('express');
const cors = require('cors');
const url = require('url')
const footballTeams = require('./footballWidget').footballTeams;

const app = express();

//const ALL_MESSAGE = "SELECT * FROM posts";

app.use(cors());

app.get('/teams', (req, res) => {
        return res.json({
        data: footballTeams.responseContent.body.teams

    });
});

app.get('/teams/:id', (req, res) => {
    console.log("hello")
    console.log(url.parse(req.url).pathname);
    console.log(req.param.id);
//        return res.json({
//        data: footballTeams.responseContent.body.teams

//    });
return res.json("Hello clients");
});

app.listen(4000, () => {
    console.log("Listening on port 4000");
});