const mysql = require('mysql');
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'lollipop',
        database: 'burgers_db'
    });
}

connection.connect(function (error) {
    if (error) throw error;
    console.log(`Connected to the database as ${connection.threadId}`);
});

module.exports = connection;
