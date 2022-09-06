/*Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.


*prep*
P: n- an integer and s- a string

R: return string s, repeated n times

E: Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"

P: -Create a variable to store repeated string. 
-Use the repeat() method and pass in n as a paramneter. 
-return repeated string variable
*/ 



function repeatStr (n, s) {
  let repeatedStr = s.repeat(n)
  return repeatedStr;
}