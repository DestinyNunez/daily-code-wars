
// Get the Middle Character - 7kyu


// use for even & odd -> % 2 results in 0 then it's even || results in something else it's odd
function getMiddle(s)
{
  if(s.length % 2 === 0){
//     % remainder 
//  if s.length === even...run...
    let halfIndex = s.length / 2
//     to get the middle number -- make sure to remember goal
//     halfIndex = 2
//     s[halfIndex] //this is 's'
//     s[halfIndex - 1] //this is 'e'
    return s[halfIndex-1] + s[halfIndex] 
  }else{
//     if s.length === odd... run...
    let halfIndex = s.length / 2
//     math.floor to round down to nearest whole integer
    let finalIndex = Math.floor(halfIndex)
    return s[finalIndex]
  }
}

