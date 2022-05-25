/*Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.*/
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

//Determine number of charactars that are "x"
//Determine number of charactars that are "o"
//If = num of x and o return true
//If x < o return false
//If o < x return false
//If no x or o in string return true
// If only x or only o return false
