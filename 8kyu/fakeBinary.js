/*Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string*/
function fakeBin(x){
  let string = '';
  for (let i = 0; i < x.length; i++) {
  const num = parseInt(x[i], 10)
  if (num < 5) {
     string += "0"
    } else {
      string += "1"
    }
  }
  return string;
}
