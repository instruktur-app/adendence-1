function squareOf(arr) {
  const result = arr.map(function (square) {
    return Math.pow(square, 2);
  });
  return result;
}

console.log(squareOf([1, 2, 3]));
// output: [ 1, 4, 9]
