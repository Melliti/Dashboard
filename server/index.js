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

// Routing
app.use('/teams', require('./routes/footballTeams'));
app.use('/users', require('./routes/users'));

app.listen(4000, () => {
    console.log("Listening on port 4000");
});