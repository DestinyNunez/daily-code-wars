
/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples: Input: 42145 Output: 54421

          Input: 145263 Output: 654321

          Input: 123456789 Output: 987654321



P: a non-negative number/integer
R: a number - reversed in order from the original number
E: 25 // 52 ; 31228 // 83221
P: we want to put the numbers in order from least to greatest, and then reverse its order from greatest to lowest
*/

function descendingOrder(n){
  let arr = n.toString().split('').sort().reverse()
    let result = arr.join('')
  return parseInt(result)
  }
