import { expect } from 'chai';
import identity from 'lib/services/identity';

describe('identity', () => {

  it('should be a dumb test!', () => {
    const result = identity.getIdentity();
    expect(result).to.be.equal('i am a test!');
  });

});
