function calculateTip(amount, rating) {

  //Create variable for tip amount
  //Create variable to make string case insensitive for rating
  let tip;
  const lowercaseRating = rating.toLowerCase();

  // Set up if statements for each rating
  if (lowercaseRating === "terrible" ) {
    tip = 0
  }
  else if (lowercaseRating === "poor") {
    tip = 0.05 * amount
  }
  else if (lowercaseRating === "good") {
    tip = 0.10 * amount
  }
  else if (lowercaseRating === "great") {
    tip = 0.15 * amount
  }
  else if (lowercaseRating === "excellent") {
    tip = 0.20 * amount
  }
  else {
    return "Rating not recognised"
  }

  //Round up tip variable before returning value
  return Math.ceil(tip)
}
