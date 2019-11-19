const orm = require('../config/orm');

const burger = {
    all: function(cb) {
      orm.selectAll('burgers', function(res) {
        cb(res);
      });
    },
     insert: function(values, cb) {
      orm.insertOne('burgers', values, function(res) {
        cb(res);
      });
    },
    update: function(values, columnName, conditionValue, cb) {
      orm.updateOne('burgers', values, columnName, conditionValue, function(res) {
        cb(res);
      });
    }
  };

module.exports = burger;