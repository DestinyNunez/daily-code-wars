//Complete the solution so that it reverses the string passed into it.
function solution(str){
    const splitStr = str.split("");
    const reverseStr = splitStr.reverse();
    const final = reverseStr.join("");
      return final;
}
