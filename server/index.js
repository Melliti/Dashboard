const express = require('express');
const cors = require('cors');
const connection = require('./sql').connection;
const footballTeams = require('./footballWidget').footballTeams;

const app = express();

const ALL_MESSAGE = "SELECT * FROM posts";

app.use(cors());

app.get('/posts', (req, res) => {
    connection.query(ALL_MESSAGE, (err, results) => {
        if (err)
            return res.send(err);
        else
            return res.json({
                data: results
            });
    });
    console.log(footballTeams);
});

app.listen(4000, () => {
    console.log("Listening on port 4000");
});