sails-shoulda
=====

[![Build Status](https://travis-ci.org/Ninevillage/sails-shoulda.svg?branch=master)](https://travis-ci.org/Ninevillage/sails-shoulda)

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
          User.should.validate_require_of('email', done);
        });
        
        it('should be unique', function(done) {
          User.should.validate_unqiue_of('email', done);
        });
      });
   });
});
```