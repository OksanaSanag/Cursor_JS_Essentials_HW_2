// Task 1
// A function which prints str after n seconds.

function printTimeout(str, n) { 
    
    return setTimeout(function(){console.log(str);}, n*1000)
  }
    
  printTimeout('hello', 5)


// Task 2
// A function which returns sum of all numbers from 1 to n using recursion.

function sumAll(n) {
    if (n != 1) {
        return n + sumAll(n - 1);
    }
    else return n;
  }
  console.log(sumAll(2)); // 3
  console.log(sumAll(4)); // 10


// Task 3
//A function which takes str and time in seconds as arguments, then every second it should count down 
//from time to 0 and print current time to console when time equals to 0 it prints str



// Task 4
//A function which returns factorial of number using recursion.

function factorial(n) {
    if (n != 1) {
      return n*factorial(n-1);
    }
    else return n; 
  }
  
   console.log(factorial(3)); // 6
   console.log(factorial(5)); // 120

// Task 5


// Task 6
//A function which takes an array of numbers and maxNumber, 
//the function returns new array with numbers not higher than maxNumber.

function filterNumbers(arr, maxNumber) {
    let a =[];
    for (let i=0; i<arr.length; i++) {
      if (arr[i] < maxNumber) a.push(arr[i]);
    }
    return a;
  }
  
console.log(filterNumbers([1, 4, 8, 1, 20], 5)); // [1, 4, 1]

/*function filterNumbers(arr, maxNumber) {
    let arrNew = arr.map(function(item) {
      if (item < maxNumber) return item;
    })
    return arrNew;
  }
  
  console.log(filterNumbers([1, 4, 8, 1, 20], 5)); // [1, 4, 1]  -> [1, 4, undefined, 1, undefined]
*/

// Task 7
//A function that returns object with min and max numbers from array of numbers.

function minMax(arr) {
    let min = function() { return Math.min(...arr);};
    let max = function() { return Math.max(...arr);};
    
    let a = {
      min: min(),
      max: max()
    }
    return a;
    }
  
  console.log(minMax([1, 4, 8, 2, 20])); // { max: 20, min: 1 }


// Task 8


// Task 9


// Task 10