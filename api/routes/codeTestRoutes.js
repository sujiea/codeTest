"use strict";
module.exports = function(app) {
    var codeTest = require("../controllers/codeTestController");

    app.route("/")
        .post(codeTest.filterData);
};
