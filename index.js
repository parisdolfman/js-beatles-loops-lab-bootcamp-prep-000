// add solution here
 function theBeatlesPlay(musicians, instruments) {
   var array = [];
    for (var counter = 0; counter < musicians.length; counter++) {
      array.push(`${musicians[counter]} plays ${instruments[counter]}`)
    }
    return array
 }


 function johnLennonFacts(facts) {
    var array = [];
    while (facts.length > 0) {
    array.push(`${facts}!!!`);
    }
    return array
  }
