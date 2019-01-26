var burgers = require("../models/burger.js");
var express = require("express");
// var app = express();
var burger_router = express.Router();

burger_router.get('/', function (req, res) {
    res.redirect('/index');
});
burger_router.get('/index', function (req, res) {
    burgers.selectAll(function (data) {
        console.log(data);
        var burgersObj = { burgers: data };
        // console.log(burgersObj);
        res.render("index", burgersObj);
    });
});
burger_router.post("api/new", function (req, res) {
    console.log("req.body:",req.body)
    res.json(req.body);
});


module.exports = burger_router;