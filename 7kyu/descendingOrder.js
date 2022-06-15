
/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples: Input: 42145 Output: 54421

          Input: 145263 Output: 654321

          Input: 123456789 Output: 987654321


p ~ Parameters- A non-negative integer
r ~ Return- The integer passed in, in reverse
e ~ Example- int = 52 return= 25 (reversed int)
p ~ Pseudo- We want to take in the integer

*/

function descendingOrder(n){
  let arr = n.toString().split('').sort().reverse()
    let result = arr.join('')
  return parseInt(result)
  }
