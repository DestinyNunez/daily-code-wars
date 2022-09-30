// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

/* p: String
   r: String
   e: "Hello Friends" => "olleH sdneirF"
   P: // Keep track of which indicies in str contain a space character

  // Reverses each word in the string and append "word" at strArr[i] to "reversedWords"

  // Puts the string back together by inserting spaces where they were in the original string */

function reverseWords(str) {
  // Keep track of which indicies in str contain a space character
  let indexArr = []
  for(let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      indexArr.push(i)
    }
  }
 
  // Reverses each word in the string and append "word" at strArr[i] to "reversedWords"
  let strArr = str.split(" ")
  let reversedWords = ""
  for (let i = 0; i < strArr.length; i++) {
    let word = strArr[i].split("").reverse().join("")
    reversedWords += word
  }
  
  // Puts the string back together by inserting spaces where they were in the original string
  let reversedCharacters = reversedWords.split("");
  for (let i = 0; i < indexArr.length; i++) {
    reversedCharacters.splice(indexArr[i], 0, " ");
  }
  return reversedCharacters.join("")
}