/*Clock shows h hours, m minutes and s seconds after midnight.
Your task is to write a function which returns the time since midnight in milliseconds.*/
function past(h, m, s) {
  const hours = h * 60 * 60 * 1000;
  const minutes = m * 60 * 1000;
  const seconds = s * 1000;
  return hours + minutes + seconds;
}
