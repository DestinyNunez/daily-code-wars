//prep==============================
//p-parameters= An integer
//r- return= An integer
//E- 9119 ---> 811181  (each number is squared by multiplying by itself 9*9)
//p- Pseudo code=


/* 1)Convert (num) into a string, store newString in variable.
    Example: 9119 -> "9119"

    2)We then need to split (newString),
    Store newArray in a variable.
    Exmaple: ["9", "1", "1", "9"]

    3)Create numSquared variable outside of for loop with an empty array.
    Example: numSquared = []

    4)Use FOR LOOP to loop through numSquared.

    5) Convert strings to num and multiply in for loop.
    convertedToIntNum = parseInt(numSquared[i])

    6)Store value of num*num in variable
    squaredValue = convertedToIntNum * convertedToIntNum


    7)Adding squared value to numSquared array.

    8) take numSquared join the array, store joinedArray in variable.
    numSquared = [81, 1, 1, 81]

    9) Return joinedArray as integer
    result to return -> 811181
*/

function squareDigits(num){
let newString = num.toString();
let newArray = newString.split('')
let numSquared = []

  for (i = 0; i< newArray.length; i++) {
    const convertedToIntNum = parseInt(newArray[i])
    const squaredValue = convertedToIntNum * convertedToIntNum
    numSquared.push(squaredValue)
  }
  const numInt = parseInt(numSquared.join(''))
  return numInt
}
