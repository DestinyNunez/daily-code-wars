/*
p- num 1, num 2
r- binary sum of num 1 and 2
e-1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
p- Add the values passed in together, then convert to a string which will return only 1 or 0 when the radix of 2 is passed into the toString method parameter. 
*/

function addBinary(a,b){
  const binarySum = (a+b).toString(2)
  return binarySum
}