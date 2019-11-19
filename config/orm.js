const connection = require('../config/connection');

let orm = {
    selectAll: function (tableName, ormCallback) {
        const sqlQuery = 'SELECT * FROM ??';
        connection.query(sqlQuery, [tableName], function (error, results) {
            if (error) throw error;
            ormCallback(results);
        })
    } ,
    insertOne: function (tableName, values, ormCallback) {
        const sqlQuery = 'INSERT INTO ?? SET ?'; //one exclamation mark for values!!!!
        connection.query(sqlQuery, [tableName, values], function (error, data) {
            if (error) throw error;
            ormCallback(data);
        })
    },
    updateOne: function (tableName, values, columnName, conditionValue, ormCallback) {
        const sqlQuery = 'UPDATE ?? SET ? WHERE ?? = ?';
        connection.query(sqlQuery, [tableName, values, columnName, conditionValue], function (error, data) {
            if (error) throw error;
            ormCallback(data);
        })
    }
}
module.exports = orm;