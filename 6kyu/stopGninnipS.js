//Stop gninnipS My sdroW!
/*Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"*/

function spinWords(str){
    let arr = str.split(" ");
    let finalStr = "";


    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        if (word.length < 5) {
            finalStr += word + " ";
        } else {
            for (let letter = word.length-1; letter >= 0; letter--) {
               finalStr += word[letter];
            }
            finalStr += " ";
        }
    }
    return finalStr.slice(0, finalStr.length-1);
}
