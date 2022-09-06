/*
-Create variable to store shortest string
-create variable to split exsisting string into an array.
-loop through split string array 
-?check the length of each string and store it?
-check if shortest string is < string.min num
*/

function findShort(s){
  let shortestStr = ""
  let strSplit = s.split(" ") 
    for (let i = 0; i < strSplit.length; i++) {
      if (strSplit[i].length < strSplit[i + 1].length ) {
        shortestStr = strSplit[i]
      }
    }
  return shortestStr.length;
}