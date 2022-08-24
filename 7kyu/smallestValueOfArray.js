// pseudocode
// 1. Create a function called smallestValue
// 2. Determine if checking for value or index
// using an if statement
// 3. Create a variable to store the min value/or index
// 4. Once I know what my second parameter is, i will then
// provide the appropriate function
// if its by index, im going to loop through the array
// and check if array at index at i is less than index i + 1,
// then store in index that variable using the array indexOf
function min(arr, toReturn) {
    let smallestValue = Number.MAX_VALUE;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallestValue) {
          smallestValue = arr[i]
        }
      }
    if (toReturn === "value") {
        return smallestValue;
    } else {
        return arr.indexOf(smallestValue);
    }
}