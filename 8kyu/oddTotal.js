// Optimized version
function oddCount(n){
    return Math.floor(n/2);
  }

//Initial version
function oddCount(n){
  let counter = 0;
  for (let i = 0; i < n; i++) {
    if (i % 2 != 0 ) {
      counter += 1
    }
  }
  return counter;
}

