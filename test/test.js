"use strict";

var expect  = require("chai").expect;
var request = require("request");

describe("Code Test Json API Unit Testing" , function( ) {
    it("Valid Data", function(done) {
        const fs = require("fs");
                
        //valid data testing
        var requestData = fs.readFileSync("test/hometrack-sample-request.json", "utf8"); 
        var responseData = fs.readFileSync("test/hometrack-sample-response.json", "utf8");  
        request.post({
            headers: {"content-type" : "application/json"},
            url:     "http://localhost:3000/filterData",
            body:    requestData
        }, function(error, response, body){
            var bodyObj = JSON.parse(body);
            expect(bodyObj).to.deep.equal(JSON.parse(responseData));
            done();
        });
    });

    it("Invalid Data", function(done) {
        //error handling testing
        var requestData2 = "Not even Json";
        var responseData2 = "{\"error\":\"Could not decode request: JSON parsing failed\"}";
        request.post({
            headers: {"content-type" : "application/json"},
            url:     "http://localhost:3000/filterData",
            body:    requestData2
        }, function(error, response, body){
            expect(body).to.equal(responseData2);
            done();
        });
    });
});

