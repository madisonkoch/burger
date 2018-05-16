var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

//ROUTES & route logic
router.get("/", function(req, res){
    burger.selectAll(function(data){
        //stuff
    })
})

//router.post
    //burger.insertOne

//router.put
    //burger.updateOne
  
// Export routes for server.js to use.
module.exports = router;