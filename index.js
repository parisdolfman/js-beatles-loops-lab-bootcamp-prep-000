// add solution here
 function theBeatlesPlay(musicians, instruments) { // function takes in argument of two arrays, musicians && instruments
   var array = []; // empty array 
    for (var counter = 0; counter < musicians.length; counter++) { // setting counter to equal 0 temporarily; on condition that the counter # is less than the legnth of the musicians array execute code block; 
      array.push(`${musicians[counter]} plays ${instruments[counter]}`)
    }
    return array
 }
