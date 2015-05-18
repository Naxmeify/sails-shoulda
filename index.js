
/**
 * TODO:
 * model matchers
 * service matchers
 * 
 * Let's start as helper
 * 
 * should.validate...
 */
 
//var should = require('should');
//should.shoulda = require(require("path").join(__dirname, 'package.json'));

// Helper
//require(require("path").join(__dirname, "lib/helper"));

// Matcher
//require(require("path").join(__dirname, "lib/matcher", "model_attribute_required"));
//require(require("path").join(__dirname, "lib/matcher", "model_attribute_unique"));
console.log("Hmm");
var Assertion = require('should').Assertion;


Assertion.add('ahelper', function(other, description) {
    console.log("ahelper");
    console.log(this);
    console.log(other);
    console.log(description);
    
    this.params = { operator: 'to be truthy' };

    this.assert(this);
});

Assertion.alias('ahelper', 'LOL');


// console.log(Object.keys(should));