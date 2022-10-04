/*Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!

p: number
r: string
e: 1234567890 => "(123) 456-7890"
p: -create a variable that will store the format we want to return.
- Use "x" in the string as the character to be replaced with a number from the array of numbers. 
-Create a for loop, which will loop through the array of numbers.
-We will then use the replace() to replace "x" with the numbers from the array.
-Finally, we will return the new string with the numbers in phone number format.
*/


function createPhoneNumber(numbers){
  let format = "(xxx) xxx-xxxx";
  
  for(let i = 0; i < numbers.length; i++) {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}