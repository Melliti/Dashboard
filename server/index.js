const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');

const app = express();

// Config passport
require('./config/passport-setup')(passport);
// Config DB
const db = require('./config/keys').MongoURI;

// Connection to Mongo
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// BodyParser
app.use(express.urlencoded({ extended: true }));

// Express Session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());

app.use('/teams', require('./routes/footballTeams'));
// app.get('/teams', async (req, res) => {
//     const data = await footballTeams.makeRequest("FL1")
//     return res.json({
//         data: data.teams
//     });
// });

// app.get('/teams/:id', async (req, res) => {
//     const data = await footballTeams.makeRequest(req.params.id)
//     return res.json({
//     data: data.teams
//     });
// });

app.listen(4000, () => {
    console.log("Listening on port 4000");
});