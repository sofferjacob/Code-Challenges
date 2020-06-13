// Code Challenges
// rotateMatrix.js
// 
// A simple function to rotate a matrix
// Copyright (c) 2020 Jacobo Soffer.

const printMatrix = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

const rotateMatrix = arr => {
  let newArr = new Array();
  for (let i = 0; i < arr.length; i++) {
    let row = new Array();
    for (let x = 0; x < arr.length; x++) {
      row.push(arr[arr.length - (x + 1)][i]);
    }
    newArr.push(row);
  }
  return newArr;
}
