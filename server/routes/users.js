const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const passport = require('passport');
// User Model
const User = require('../models/User')

router.post('/login', (res, req) => {
    console.log("login triggered");
})


router.post('/register', (res, req) => {
    console.log("register triggered");
})

module.exports = router;