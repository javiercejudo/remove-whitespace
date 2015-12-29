/**
 * Module dependencies
 */

var fn = require('./index');

/**
 * Test
 */

describe('whitespace-remove', function() {
  it('should assert argument types', function() {
    fn.bind(undefined, 123)
      .should.throw(TypeError);
  });

  it('should strip all whitespace from the string', function() {
    fn('foo \n bar \r \n bla bla bla bla')
      .should.eql('foo\nbar\r\nblablablabla');
  });
});
