"use strict";

var should = require("should");

var dehoust_utils = require("../index.js");
var model = dehoust_utils.models.gfk_2000;

describe("calculateFluidLevel", function() {
    it("should return 30l", function() {
        dehoust_utils.calculateFluidLevel(model, 50).should.equal(30);
    });
   
    it("should return 120l", function() {
        dehoust_utils.calculateFluidLevel(model, 150).should.equal(120);
    });
    
    it("should return 1020l", function() {
        dehoust_utils.calculateFluidLevel(model, 750).should.equal(1020);
    });
    
    it("should return 2025l", function() {
        dehoust_utils.calculateFluidLevel(model, 1500).should.equal(2025);
    });
    
    it("should return 50l", function() {
        dehoust_utils.calculateFluidLevel(model, 75).should.equal(50);
    });
    
/*
    it("should return 10l", function() {
        dehoust_utils.calculateFluidLevel(model, 6).should.equal(10);
    });
*/
});
