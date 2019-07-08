// Task 1
// A function which prints str after n seconds.

function printTimeout(str, n) { 
    
    setTimeout(function(){console.log(str);}, n*1000)
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
  // Метод 2
  // return (n != 1) ?  n + sumAll(n - 1) :  n;
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
  // Метод 2
  // return (n != 1) ?  n*factorial(n-1) :  n;

   console.log(factorial(3)); // 6
   console.log(factorial(5)); // 120

// Task 5


// Task 6
//A function which takes an array of numbers and maxNumber, 
//the function returns new array with numbers not higher than maxNumber.

function filterNumbers(arr, maxNumber){ 
  return arr.filter(function (item) {
      return item < maxNumber;
    });     
}

console.log(filterNumbers([1, 4, 8, 1, 20], 5)); // [1, 4, 1]

        /* Метод 2
        function filterNumbers(arr, maxNumber) {
            let arrNew =[];
            for (let i=0; i<arr.length; i++) {
              if (arr[i] < maxNumber) arrNew.push(arr[i]);
            }
            return arrNew;
          }
        
        console.log(filterNumbers([1, 4, 8, 1, 20], 5)); // [1, 4, 1]
        */
        /*  Метод 3
        function filterNumbers(arr, maxNumber) {
        let arrNew = [];
            arr.map(function(item) {
            if (item < maxNumber) {arrNew.push(item);}
            })
            return arrNew;
        }
        console.log(filterNumbers([1, 4, 8, 1, 20], 5)); // [1, 4, 1]
        */

// Task 7
//A function that returns object with min and max numbers from array of numbers.

function minMax(arr) {
  //let min = function() { return Math.min(...arr);};
  //let max = function() { return Math.max(...arr);};
  
  return {
    min: function() { return Math.min(...arr);}(),
    max: function() { return Math.max(...arr);}()
  };
}
  
  console.log(minMax([1, 4, 8, 2, 20])); // { max: 20, min: 1 }


// Task 8
//A function that returns average of numbers in array.

function average(arr) {
    let result = arr.reduce(function(prevResult, current) {
      return prevResult + current
    });
    return ( Math.round(result/arr.length * 100) / 100 );
}
    
   console.log(average([1,4,2])); // 2.33
   console.log(average([1,4,4])); // 3
   console.log(average([1,4,1])); // 2


// Task 9
//A function which concats all first-nested arrays in one array (use reduce)

function concatFirstNestedArrays(arr) {
  return arr.reduce(function(prevRes, current) {
    let c =[...prevRes];
    c.push(...current); 
    return c;
  });
}
console.log(concatFirstNestedArrays([[0, 1], [2, 3], [4, 5]])); // [0, 1, 2, 3, 4, 5]

        /* Метод 2
        function concatFirstNestedArrays(arr) {
          return arr.reduce(function(prevRes, current) {
             return prevRes.concat(current);
          });
        }
        console.log(concatFirstNestedArrays([[0, 1], [2, 3], [4, 5]])); // [0, 1, 2, 3, 4, 5]

        /*  Метод 3
        function concatFirstNestedArrays(arr) {
            let arrNew = [];
            arr.map(function(item) { arrNew.push(...item) })
            return arrNew;
        }
        console.log(concatFirstNestedArrays([[0, 1], [2, 3], [4, 5]])); // [0, 1, 2, 3, 4, 5]
        */


// Task 10
//A function accepts array of users and returns object of users where key is user id and value user data.

const users = [
  { id: 1, name: 'John', birthday: '1999-2-12' },
  { id: 2, name: 'Bill', birthday: '1999-1-19' },
  { id: 3, name: 'Carol', birthday: '1999-3-11' },
  { id: 4, name: 'Luce', birthday: '1999-2-22' }
];

function usersToObject(users) {
  let obj = new Object();
  users.forEach(function(item) {    
    obj[item.id] = item;                            
  });

return obj;
}

console.log(usersToObject(users));


// Task 11
//A function returns array of users that have birthdays in a specific month.


// Task 12
//A function returns name and age of users separated by comma that are older than 18.
