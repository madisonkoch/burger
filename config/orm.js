var connection = require("../config/connection.js");


//Object for SQL commands
var orm = {
    selectAll: function(cb){
        var queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function(err,res){
            if (err){
                throw err;
            }
            cb(res);
        })
    },

    insertOne: function(burgerDescription, cb){
        var queryString = "INSERT INTO burgers ("+ burgerName + ") VALUES ('"+burgerDescription+"')" ;
        console.log(queryString);
        connection.query(queryString, function(err, res){
            if (err) {
                throw err;
            }
            cb(res)
        });
  },

    updateOne: function(burgerDescription, cb){
        var queryString = "UPDATE burgers SET devoured WHERE burger_name ="+burgerDescription;
        console.log(queryString);
        connection.query(queryString, function(err,res){
            if (err){
                throw err;
            }
            cb(res);
        });
    }
};

module.exports = orm;