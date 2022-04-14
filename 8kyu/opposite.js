/*Given an integer or a floating-point number, find its opposite.

Examples:

1: -1
14: -14
-34: 34*/

function opposite(number) {
  const result = posNeg(number)
  if (result == 1) {
    return -Math.abs(number)
  } else {
    return Math.abs(number)
  }
}

function posNeg(num) {
  return Math.sign(num)
}
