import assert from 'assert';
import Hello from '../src/hello';

describe('Hello', function() {
  describe('getWorld', function() {
    it('should return space world', function(done) {
      Hello.getWorld()
      .then(result => {
        assert.equal(' world', result);
        done();
      })
      .catch(err => {
        console.log(err);
        done(err);
      });
    });
  });
  describe('hello', function() {
    it('should return hello world', function(done) {
      Hello.hello()
      .then(result => {
        assert.equal('hello world', result);
        done();
      })
      .catch(err => {
        console.log(err);
        done(err);
      });
    });
  });
});
