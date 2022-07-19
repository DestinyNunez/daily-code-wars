/*Write a function that returns a vector (list in Python) with each element representing one bit of a 32bit unsigned/signed integer in such a way that if printed it would appear as the binary representation of the integer (Least Significant Bit on the right).

*/

function showBits (n) {
  
    let nBin = (n >>> 0).toString(2);
    console.log(nBin);
    let newArr = new Array(32 - nBin.length).fill(0);
    
    for(let i = 0; i < nBin.length; i++){
      newArr.push(+nBin[i]);
    }
    
    return newArr;
  }