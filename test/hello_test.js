import assert from 'assert';
import Hello from '../src/hello';

describe('Hello', function() {
  describe('getWorld', function() {
    it('should return space world', function() {
      Hello.getWorld()
      .then(result => {
        assert.equal(' world', result);
      });
    });
  });
  describe('hello', function() {
    it('should return hello world', function() {
      Hello.hello()
      .then(result => {
        assert.equal('hello world', result);
      });
    });
  });
});
