const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'lollipop',
    database: 'burgers_db'
});

connection.connect(function (error) {
    if (error) throw error;
    console.log(`Connected to the database as ${connection.threadId}`);
});

module.exports = connection;