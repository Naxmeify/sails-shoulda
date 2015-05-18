



// should.validation_helper = {};

// should.validation_helper.get_dummy_for_attribute = function(attribute) {
//     // Checkout the attribute
//     // Type
//     // any validations?
// };

// should.validation_helper.get_dummy_for_model = function(Model) {
    
// };


var Assertion = require('should').Assertion;


Assertion.add('ahelper', function(other, description) {
    // console.log("ahelper");
    // console.log(this);
    // console.log(other);
    // console.log(description);
    
    this.params = { operator: 'to be truthy' };

    this.assert(this);
});

Assertion.alias('ahelper', 'LOL');