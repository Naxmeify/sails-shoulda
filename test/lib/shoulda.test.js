require('should-approximately-deep');
require('../../');

describe('NodeModule Shoulda', function() {
  it('should', function() {
    [1, 2, 3].should.not.be.approximatelyDeep([1, 2], 0.1);
    true.should.be.LOL("asd");
  });
});