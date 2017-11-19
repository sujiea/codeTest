"use strict";

var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use (function (error, req, res, next){
    //Catch json error
    res.status(400).send({"error":"Could not decode request: JSON parsing failed"});
});

var routes = require("./api/routes/codeTestRoutes"); //importing route
routes(app); //register the route

app.listen(port);

//add 404
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + " not found"});
});

