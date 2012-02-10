
var
  web = require('../lib/web.js');
  
describe('store', function() {
  it('should exist', function() {
    expect(typeof web.store).toEqual('function');
  });
});