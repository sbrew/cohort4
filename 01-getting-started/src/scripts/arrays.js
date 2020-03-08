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