var expect = require('chai').expect;
var identity = require('lib/services/identity');

describe('identity', () => {

  it('should be a dumb test!', () => {
    var result = identity.getIdentity();
    expect(result).to.be.equal('i am a test!');
  });

});
