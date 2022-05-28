/*
Complete the solution so that the function will break up camel casing, using a space between words.

P: parameter is a string, might be in camelcase or not
R: returning a string a two words split apart by a space if it is camelcase, otherwise return the same string
E: "camelCasing"  =>  "camel Casing"
    "emilyCastillo" => "emily Castillo"
    "identifier"   =>  "identifier"
    ""             =>  ""

P: probably use split or toUpperCase to check through if the string has uppercase letters
for loop to iterate through the letters and check if it has an uppercase - if so it ill insert a space before
how do we insert a space before?
conditional for words that are not camelcase too
*/

function solution(string) {
    let arr = string.split('')
    for(let i = 0; i < arr.length; i++){
        if(arr[i].toUpperCase() === arr[i]){
            arr.splice(i, 0, ' ')
            break
        }
    }
    return arr.join('')
}
