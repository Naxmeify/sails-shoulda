var should = require('should');
function TheUser() {
  return {
    adapter: {
      identity: 'user'
    },
    
    email: {
      type: 'string',
      required: true
    }
  };
}
var User = new TheUser();

describe('Matcher Model Attribute Required', function() {
  it('should validate that the given attribute in model is required (Obj extension)', function(done) {
    User.should.validate_require_of('email', done);
  });
  
  it('should validate that the given attribute in model is required (Static)', function(done) {
    should.validate_require_of(User, 'email', done);
  });
});