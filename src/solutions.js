/*
  Your task is to make a function that can 
  take any non-negative integer as an argument
  and return it with its digits in descending 
  order. Essentially, rearrange the digits 
  to create the highest possible number.
*/

export function descendingOrder(n){
  const arr = Array.from(String(n), Number);
  arr.sort(function(a, b){return b - a});
  return Number(arr.join(''));
}


