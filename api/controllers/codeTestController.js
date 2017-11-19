"use strict";

exports.filterData = function(req, res) {
    var Property = require("../models/property.js");

    var reqArray = req.body.payload;
    var resArray = [];
    // process request data
    reqArray.filter( function (item) {
        var property = new Property (item);
        var result = property.getResult("htv","completed");

        if (result !== null) {
            resArray.push(result);  //save to response data
        }
    });

    return res.json({"response":resArray});
};