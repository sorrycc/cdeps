'use strict';

var join = require('path').join;
var cdeps = require('..');

describe('cdeps', function() {

  it('Normal use', function() {
    var deps = cdeps(join(__dirname, './fixtures/normal/a.js'));
    deps.should.be.eql(['depa', 'depd', 'depe', 'depi', 'depb']);
  });

});
