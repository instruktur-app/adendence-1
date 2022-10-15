function getOdd(arr) {
    return arr.filter(item => item % 2 !== 0)
}
  
console.log(getOdd([1, 2, 3, 4, 5, 6, 7, 8]))
// output: [ 1, 3, 5, 7 ]
