function main(words) {

  if(words!=='') {
    var wordArray=words.split(' ');
    return wordArray.map((w) => format(w,1)).join('\r\n');
  }
  else return '';

}

var format =function(word,count){
  return word+' '+count;
};


module.exports = main;
