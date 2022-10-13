function totalOfElement(arr) {
    const result = arr.reduce(function(previous,current){
        return previous + current;
    })
    return result;
  }
  
  console.log(totalOfElement([1,3,2,4]))
  // output: 10

  // p = 0  c = 1  r = 1
  // p = 1  c = 3  r = 4
  // p = 4  c = 2  r = 6
  // p = 6  c = 4  r = 10