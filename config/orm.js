var connection = require("../config/connection.js");

var orm = {
    // The last variable cb represents the anonymous function being passed from server.js
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (tableInput, colToAdd, valOfCol, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES(?)";
        connection.query(queryString, [tableInput, colToAdd, valOfCol], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function (tableInput, colToUppdate, valOfCol, id,cb) {
        var queryString = "UPDATE ?? SET ??=? WHERE id= ?";
        connection.query(queryString, [tableInput, colToUppdate, valOfCol,id], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;
