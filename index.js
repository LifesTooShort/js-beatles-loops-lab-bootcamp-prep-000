// add solution here

function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  
  for (var i=0; i < musicians.length; i++) {
    newArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return newArray;
}

function johnLennonFacts(factsArray) {
  var i=0;
  while (i < factsArray.length) {
    factsArray[i++] += "!!!";
  }
  return factsArray;
}