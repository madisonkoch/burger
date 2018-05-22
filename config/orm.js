var connection = require("../config/connections.js");

//Object for SQL commands
var orm = {
    selectAll: function(cb){
        var queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function(err,res){
            if (err){
                throw err;
                console.log(err + "orm.js 1");
            }
            cb(res);
        })
    },

    insertOne: function(burgerDescription, cb){
        var newBurger = burgerDescription.burger_name;
        console.log("ORM | burger: " +burgerDescription.burger_name);
        var queryString = "INSERT INTO burgers (burger_name) VALUES ('"+ burgerDescription.burger_name+"')" ;
        console.log(queryString);
        connection.query(queryString, function(err, res){
            if (err) {
                throw err;
                console.log(err + "orm.js 2");
            }
            cb(res)
        });
    },

    updateOne: function(burgerDescription, cb){
        var name = burgerDescription.id;
        console.log(burgerDescription);
        var queryString = "UPDATE burgers SET devoured=true WHERE id ="+name;
        console.log(queryString);
        connection.query(queryString, function(err,res){
            if (err){
                throw err;
                console.log(err + "orm.js 3");
            }
            cb(res);
        });
    }
};

module.exports = orm;