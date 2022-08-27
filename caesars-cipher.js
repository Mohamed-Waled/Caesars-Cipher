function rot13(str) {
  let result = "";
  let first13 = "abcdefghijklm".toUpperCase();
  let second13 = "nopqrstuvwxyz".toUpperCase();

  for (let i = 0; i < str.length; i++) {

    if (first13.indexOf(str[i]) >= 0) {
      result += second13[first13.indexOf(str[i])];
    } else if (second13.indexOf(str[i]) >= 0) {
      result += first13[second13.indexOf(str[i])];
    } else {
      result += str[i];
    }

  }


  return result;
}

console.log(rot13("SERR CVMMN!"));