var should = require("should");

should.validate_unique_of = function(Model, field, done) {
  console.log("validate_unique_of "+field+" in Model"+Model.adapter.identity);
  done();
};