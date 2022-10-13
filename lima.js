function biggerElement(arr) {
    const result = arr.reduce(function(previous, current) {
        if(current > previous){
            return current
        } else{
            return previous
        }
    }, 0)
    return result
    
  }
  
  console.log(biggerElement([1,3,2,4]))
  // output: 4

// p = 0   c = 1   c > p ====> c => 1
// p = 1   c = 3   c > p ====> c => 3
// p = 3   c = 2   c > p ====> p => 3
// p = 3   c = 4   c > p ====> c => 4
// p = 4   c ????

// return 4