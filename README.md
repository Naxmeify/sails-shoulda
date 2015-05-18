sails-shoulda
=====

Collection of method for sailsjs testing. Provides common shortcuts.

# Installation

```
$ npm install --save-dev sails-shoulda
```

# Usage

At first require it in your ```bootstrap.test.js```.

```JavaScript
require("sails-shoulda");
```

Next, use it in your tests.

```JavaScript
describe("Model: User", function() {
   context('attribute', function() {
      context('email', function() {
        it('should be required', function(done) {
          should.validate_require_of(User, 'email', done);
        });
        
        it('should be unique', function(done) {
          should.validate_unqiue_of(User, 'email', done);
        });
      });
   });
});
```