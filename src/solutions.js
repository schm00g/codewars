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

/* 
  In this kata you are required to, 
  given a string, replace every letter 
  with its position in the alphabet.
*/

export function alphabetPosition(text) {
  const position = {
    a: "1",
    b: "2",
    c: "3",
    d: "4",
    e: "5",
    f: "6",
    g: "7",
    h: "8",
    i: "9",
    j: "10",
    k: "11",
    l: "12",
    m: "13",
    n: "14",
    o: "15",
    p: "16",
    q: "17",
    r: "18",
    s: "19",
    t: "20",
    u: "21",
    v: "22",
    w: "23",
    x: "24",
    y: "25",
    z: "26"
  }
  
  let result = "";
  
  for(let i = 0; i <= text.length; i++){
    if((/[a-zA-Z]/).test(text.charAt(i))){
      result = result.concat(position[String(text.charAt(i)).toLowerCase()]);
      if(i < text.length - 2){
        result = result.concat(" ");
      }
    }
  };
  return result;
}
