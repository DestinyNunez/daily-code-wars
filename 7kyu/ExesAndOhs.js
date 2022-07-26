/*Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.*/

//Determine number of charactars that are "x"
//Determine number of charactars that are "o"
//If = num of x and o return true
//If x < o return false
//If o < x return false
//If no x or o in string return true
// If only x or only o return false

function XO(str) {
  let x = '';
  let o = '';
  for (let i=0; i<str.length; i++) {
    if (str[i].toLowerCase() === 'x') {
      x += str[i];
      } else if (str[i].toLowerCase() === 'o') {
      o += str[i];
      }
    }
    return x.length === o.length ;
}

//****UPDATED SOLUTION*****
/*Check to see if a string has the same 
amount of 'x's and 'o's. 
The method must return a boolean and be
case insensitive. The string can contain any char.*/
 
function checkXO(str) {
  let cntrX = 0;
  let cntrO = 0;
    for(i = 0; i< str.length; i++) {
      if (str[i] === 'x' || str[i] === 'X' ) {
        cntrX += 1
      } else if(str[i] === 'o' || str[i] === 'O' ) {
          cntrO += 1
      }
    }
   /*We will return the variables with a strict equals operator and if true it will say true, if not it returns false*/
    return cntrX === cntrO
}

console.log(checkXO('XxxXLDFNRJDSOOO'))
