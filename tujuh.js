function squareOf(arr) {
  arr.forEach(function (square, index, array) {
    array[index] = square * square;
  });
}

console.log(squareOf([1, 2, 3]));
// output: [ 1, 4, 9]
