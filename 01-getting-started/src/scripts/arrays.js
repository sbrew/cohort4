
let arr = [];

const arrayFunctions = {

  addArray: (num) => {
    arr.push(num);
    return arr;
  },

  showArray: (num) => {
    let arrDisplay = arr.join();
    return arrDisplay;
  },

  totalArray: (num) => {
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  },

  clearArray: (num) => {
    arr = [];
    return arr;
  }
};




export default arrayFunctions;