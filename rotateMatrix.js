const printMatrix = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

class Elements {
  constructor(arr) {
    this.arr = arr;
    this.x = 0;
    this.y = 0;
  }
  getElement (x, y) {
    let newY = this.arr.length - (x + 1);
    let newX = y;
    return this.arr[newX][newY];
  }
}

function rotateMatrix (arr) {
  // Create the new array
  let newArr = new Array();
  const fetchElement = new Elements(arr); 
  for (let i = 0; i < arr.length; i++) {
    let row = new Array();
    let y = arr[i];
    for (let x = 0; x < y.length; x++) {
      let element = fetchElement.getElement(i, x);
      row.unshift(element);
    }
    newArr.unshift(row);
  }
  return newArr;
}
