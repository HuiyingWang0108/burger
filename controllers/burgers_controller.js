var burgers = require("../models/burger.js");
var express = require("express");
// var app = express();
var burger_router = express.Router();
// Sets up the Express app to handle data parsing
// burger_router.use(express.urlencoded({ extended: true }));
// burger_router.use(express.json());
// var bodyParser = require('body-parser');

// burger_router.use(bodyParser.json());
// burger_router.use(bodyParser.urlencoded({extended: false}));
// burger_router.use(bodyParser.text());
// burger_router.use(bodyParser.json({type:'application/vnd.api+json'}));


burger_router.get('/', function (req, res) {
    res.redirect('/index');
});
burger_router.get('/index', function (req, res) {
    burgers.selectAll(function (data) {
        // console.log(data);
        var burgersObj = { burgers: data };
        // console.log(burgersObj);
        res.render("index", burgersObj);
    });
});
burger_router.post("/api/new", function (req, res) {
    console.log("req.body:", req.body);
    burgers.insertOne(req.body.burger_name, function (data) {
        res.redirect('/index');
    });
    // //nothing happen ?
    // res.redirect("/index");
    // console.log("It has redirect");
});
burger_router.post("/api/update", function (req, res) {//put
    console.log("req.body:", req.body);
    console.log("res.redirect",res.redirect);
    burgers.updateOne(req.body.id, function (data) {
        res.redirect('/index');
    });
});


module.exports = burger_router;
