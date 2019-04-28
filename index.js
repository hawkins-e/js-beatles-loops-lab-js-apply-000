function theBeatlesPlay(musicians,instruments){
  var ourArray=[];
  for (var i=0; i< musicians.length; i++){
    ourArray.push(musicians[i]  + " plays " + instruments[i]);
  }
  return ourArray;
}
function johnLennonFacts(constfacts){
  var forthefacts=[];
  var j = 0;
   while (j<
     constfacts.length){
    forthefacts.push(constfacts[j] + "!!!");
    j++;
  }
  return forthefacts;
}
function iLoveTheBeatles(value){
  var somuchlove=[];
  var e = 15-value;
  do {
    somuchlove.push("I love the Beatles!");
  } while(e < value.length);
}
 return somuchlove;
