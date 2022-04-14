//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function even_or_odd(number) {
   let even = number % 2 == 0;
  if (even) {
    return "Even";
  } else {
    return "Odd";
  }
}
