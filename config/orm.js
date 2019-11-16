const connection = require('../config/connection');

let orm = {
    all: function selectAll(tableName, ormCallback) {
        const sqlQuery = "SELECT * FROM ??";
        connection.query(sqlQuery, function (error, data) {
            if (error) throw error;
            ormCallback(data);
        })

    },
    insert: function insertOne(tableName, columnName, columnValue, ormCallback) {
        const sqlQuery = "INSERT INTO ?? (??) VALUES (??)";
        connection.query(sqlQuery, function (error, data) {
            if (error) throw error;
            ormCallback(data);
        })
    },
    update: function updateOne(tableName, columnName, conditionName, conditionValue, ormCallback) {
        const sqlQuery = "UPDATE ?? SET ?? WHERE ?? = ??";
        connection.query(sqlQuery, function (error, data) {
            if (error) throw error;
            ormCallback(data);
        })
    }
}
module.exports = orm;