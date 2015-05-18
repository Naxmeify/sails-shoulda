describe("Model: User", function() {
   context('attribute', function() {
      context('name', function() {});
      context('email', function() {
         it('should be required', function(done) {
            should.validate_require_of(User, 'email', done);
         });
         
         it('should be unique', function(done) {
            should.validate_unqiue_of(User, 'email', done);
         });
      });
      context('password', function() {});
      context('createdAt', function() {});
      context('updatedAt', function() {});
   });
});