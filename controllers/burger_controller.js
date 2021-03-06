var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

//ROUTES & route logic
router.get("/", function(req, res){
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };
        //console.log(hbsObject);
        res.render("index", hbsObject);
    });
})

router.post("/api/burgers", function(req,res){
    console.log("hit burger_controller 1");
    console.log(req.body);

    burger.insertOne({
        burger_name: req.body.burger_name},
        //burger_name: 'avocado'},
        function(result){
            console.log("hit burger_controller 2");
            res.sendStatus(201);
        }
    );
})

router.put("/api/burgers/:id", function(req,res){
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.updateOne({
        id: parseInt(req.params.id)
    }, function(result){
        if (result.changeRows == 0){
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
// Export routes for server.js to use.
module.exports = router;