const arrayFunctions = {

  addArray: (arr, num) => {
    arr.push(num);
    return arr;
  },

  showArray: (arr) => {
    let arrDisplay = arr.join();
    return arrDisplay;
  },

  totalArray: (arr) => {
    // can use reduce mthod, its slightly more difficult as it is 
    // a call back function we will get to that later
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  },

  clearArray: (arr) => {
    arr = [];
    return arr;
  }


  
};




export default arrayFunctions;