describe("Word Frequency", function() {
  var main = require('../../lib/jasmine_examples/Player');
  it('return empty string given empty string',function(){
    var result=main('');
    var expect_string='';
    expect(expect_string).toEqual(result);
  })

  it('return string given one word',function(){
    var result=main('he');
    var expect_string='he 1';
    expect(expect_string).toEqual(result);
  })

});
