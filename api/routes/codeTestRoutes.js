"use strict";
module.exports = function(app) {
    var codeTest = require("../controllers/codeTestController");

    app.route("/filterData")
        .post(codeTest.filterData);
};