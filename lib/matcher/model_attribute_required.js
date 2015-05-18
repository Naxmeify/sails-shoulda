var Assertion = require('should').Assertion;

module.exports = function(should) {
  should.validate_require_of = function(Model, field, done) {
    console.log("validate_require_of "+field+" in Model "+Model.adapter.identity);
    done();
  };
  
  Assertion.add('validate_require_of', function(field, done) {
    console.log("validate_require_of "+field+" in Model "+this.obj.adapter.identity);
    this.assert(true);
    done();
  });
};