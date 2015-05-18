var should = require("should");

should.validate_require_of = function(Model, field, done) {
  console.log("validate_require_of "+field+" in Model"+Model.adapter.identity);
  done();
};