/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

=========================================
-create variable to split exsisting string into an array.
-Create variable to store shortest string
-loop through split string array 
-check if current string[i] < shortest string length then we reassign 
the shortestStr variable to the current string.
*/

function findShort(s){
  let strSplit = s.split(" ")
    let shortestStr = strSplit[0]
    for (let i = 0; i < strSplit.length; i++) {
      if (strSplit[i].length < shortestStr.length ) {
        shortestStr = strSplit[i]
      }
    }
  return shortestStr.length;
}