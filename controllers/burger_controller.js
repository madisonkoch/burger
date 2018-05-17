var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

//ROUTES & route logic
router.get("/", function(req, res){
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
})

//router.post
    //burger.insertOne

router.put("/api/burgers/:id", function(req,res){
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(result){
        if (result.changeRows == 0){
            return res.status(404).end();
        } else {
            res.status(200).end();
            console.log("hit");
        }
    });
});
  
// Export routes for server.js to use.
module.exports = router;