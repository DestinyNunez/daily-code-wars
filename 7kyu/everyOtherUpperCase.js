// given string ex. ("test string")
//uppcase every other char
// return ("test string") ==> ("tEsT StRiNg")
//
//create a functiopn name everyOtherUpperCase and passing in a parameter string
function everyOtherUpperCase(string){
  let result = '';
  //created my for loop and I am now initializing my variable
  //I am setting the condition where i is less than the length of the string being passed in
  //i am going to increment this by 1 with i++
  for(let i = 0; i < string.length; i++){
    console.log(string[i])
    result += i % 2 === 0 ? string.charAt(i).toUpperCase() : string.charAt(i).toLowerCase();
  }
  return result
}
//I am calling my function every other uppercase and I'm going to pass an example, my own parameter.

console.log(everyOtherUpperCase('test string'))