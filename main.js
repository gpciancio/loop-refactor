'use strict';

/*

Refactor the following functions. Use higher-order functions rather than for-loops.

Choose from the following higher-order functions: map, filter, reduce, every, some

Run the command 'mocha' to test. Tests check for expected output and absence of for-loops.

*/

module.exports = {

  // sum: (arr, base) => {     //Reduce HOF
  //   let sum = base;
  //   for (var i = 0; i < arr.length; i++){
  //     sum += arr[i];
  //   }
  //   return sum;
  // },

  sum: (array, startingPoint) => {
    var total = array.reduce( function(sum, amount) {
      return sum += amount;
    }, startingPoint);

    return total;
  },


  // someObjsContainProp: (arr, prop) => {   //filter
  //   for(var i = 0; i < arr.length; i++){
  //     if(arr[i].hasOwnProperty(prop)){
  //       return true;
  //     }
  //   }
  //   return false;
  // },

  someObjsContainProp: (arr, prop) => {
   var newArray = arr.filter(function(currentValue){
     return currentValue.hasOwnProperty(prop);
   });

    if (newArray.length > 0) {
      return true;
    }
    else {
      return false;
    }
  },

  // convertNameArrayToObject: (arr) => {  //reduce
  //   let nameObj = [];
  //   for(var i = 0; i < arr.length; i++){
  //     let obj = {};
  //     obj.first = arr[i][0];
  //     obj.last = arr[i][1];
  //     nameObj.push(obj);
  //   }
  //   return nameObj;
  // },

  convertNameArrayToObject: (arr) => {
    var final = [];
    var nameObj = arr.reduce(function (total, currentValue){
      var obj = {};
      obj.first = currentValue[0];
      obj.last = currentValue[1];
      return total.concat([obj]);
    }, final);

    return nameObj;
  },


  objContainsProp: (arr, prop) => {
    var response;
    arr.filter(function(currentValue) {
      if(!currentValue.hasOwnProperty(prop)) {
        response = false;
        return
      }
      response = true;
    });
    return response;
  },

    // objContainsProp: (arr, prop) => {
    // for (var i = 0; i < arr.length; i++){
    //   if(!arr[i].hasOwnProperty(prop)){
    //     return false;
    //   }
    // }
    // return true;
    // },





  stringMatch: (arr, str) => {
    var matches = arr.filter(function(currentValue) {
      return currentValue.includes(str);
    });
    return matches;
  }

}
