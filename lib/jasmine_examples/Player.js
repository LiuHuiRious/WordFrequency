function main(words) {
  if(words!=='') {
    var wordArray=words.split(' ');
    var groupWords=group(wordArray);
    groupWords.sort((x,y)=> y.count- x.count);
    return groupWords.map((w) => format(w.word, w.count)).join('\r\n');
  }
  else return '';
}
var format =function(word,count){
  return word+' '+count;
};
var group= function (wordArray) {
  var array=[];
  wordArray.forEach((word)=>{
    var entry =array.find((e)=> e.word===word);
  if(entry){
    entry.count++;
  }else{
    array.push({word:word,count:1});
  }
});
  return array;
}
module.exports = main;
