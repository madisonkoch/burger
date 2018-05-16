var orm = require("../config/orm.js");

//call the ORM functions using burger specific input
var burger = {
    selectAll: function(cb) {
        orm.selectAll(function(res){
            cb(res);
        });
    },
    insertOne: function(burgerDescription, cb){
        orm.insertOne(burgerDescription, function(res){
            cb(res);
        });
    },
    updateOne: function(burgerDescription, cb){
        orm.updateOne(burgerDescription, function(res){
            cb(res);
        });
    }
};

module.exports = burger;
