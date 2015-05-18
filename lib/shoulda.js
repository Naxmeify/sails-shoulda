var util = require('util');
var should = require('should');
var AssertionError = should.AssertionError;

// Only current test
require('./helper');



function bla(should) {
  should.bla = should.blas = function(obj, msg) {
    if(obj != "bla") {
      throw new AssertionError({
        message: msg || ('expected ' + i(obj) + ' to be equel bla'), stackStartFunction: should.bla
      });
    }
  };
};

should.use(bla);