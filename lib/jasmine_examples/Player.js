function main(words) {

  if(words!=='')
  {
    var count=1;
    return format(words,1);
  }
  else return '';

}

var format =function(word,count){
  return word+' '+count;
};


module.exports = main;
