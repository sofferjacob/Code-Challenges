const binaryTranslator = (str) => {
  // Split the string to form an array of 8 digits per string
  let arr = str.split(" ");
  let result = '';
  // Iterate through the array
  for (let i = 0; i < arr.length; i++) {
    let iter = arr[i];
    let num = 0;
    // Iterate through the string
    for (let s = 0; s < 8; s++) {
      if (iter[s] === '1') {
        num += Math.pow(2, 7-s);
      }
    }
    if (num > 0) {
      result += String.fromCharCode(num);
    }
  }
  return result;
}
