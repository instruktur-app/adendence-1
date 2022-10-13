function biggerElement(arr) {
    const result = arr.reduce(function(previous,current){
        if(current>previous){
            return current
        }else{
            return previous
        }
    })
    return result
    
  }
  
  console.log(biggerElement([1,3,2,4]))
  // output: 4