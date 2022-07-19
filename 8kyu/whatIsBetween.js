/*Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
*/
function between(a, b) {
  let array = []
  for (let i = a; i<= b; i++) {
    array.push(i)
  }
  return array;
}


/*Write a function that will take in 2 intgers a, b and return only the even numbers between a and b NOT INCLUDING a, b. a will allways be less than b */

function evenNumsBetween(a, b) {
  let array = [];
    for (let i = a+1; i<=b-1; i++) {
      if(i % 2 == 0) {
        array.push(i)
    }
  }
    return array;
}
console.log(numLine(0, 50))
