const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: ''
});

connection.connect(err => {
    if (err)
        return err;
});

exports.connection = connection;