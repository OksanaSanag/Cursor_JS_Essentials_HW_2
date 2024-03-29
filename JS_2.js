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

function bombTimer(str, time) {  
  let timerId = setInterval(function() {
    console.log(time--);
  }, 1000);
  
  setTimeout(function() {
    clearInterval(timerId);
    console.log(str);
  }, (time+1)*1000);
}

bombTimer('Boooom', 3);


// Task 4
//A function which returns factorial of number using recursion.

function factorial(n) {
  if (n == 0) { return 1; }
  else {
    if (n != 1) {
      return n*factorial(n-1);
    }
    else return n; 
  }
}
  // Метод 2
  // return (n != 1) ?  n*factorial(n-1) :  n;

console.log(factorial(3)); // 6
console.log(factorial(5)); // 120

// Task 5
//Implement function from task №3 (bombTimer) using recursion and setTimeout.

function bombTimer(str, time) {       
  console.log(time);
  if (time != 0) { return setTimeout(function() { 
  bombTimer(str, time-1)
  }, 1000);}
  console.log(str);   
}

bombTimer('Boooom', 3);

// Task 6
//A function which takes an array of numbers and maxNumber, 
//the function returns new array with numbers not higher than maxNumber.

function filterNumbers(arr, maxNumber){ 
  return arr.filter(function (item) {
      return item <= maxNumber;
    });     
}

console.log(filterNumbers([1, 4, 8, 1, 20], 5)); // [1, 4, 1]

        /* Метод 2
        function filterNumbers(arr, maxNumber) {
            const arrNew =[];
            for (let i=0; i<arr.length; i++) {
              if (arr[i] <= maxNumber) {arrNew.push(arr[i]);}
            }
            return arrNew;
          }
        
        console.log(filterNumbers([1, 4, 8, 1, 20], 5)); // [1, 4, 1]
        */

        /*  Метод 3
        function filterNumbers(arr, maxNumber) {
            const arrNew = [];
            arr.map(function(item) {
            if (item <= maxNumber) {arrNew.push(item);}
            })
            return arrNew;
        }
        console.log(filterNumbers([1, 4, 8, 1, 20], 5)); // [1, 4, 1]
        */

// Task 7
//A function that returns object with min and max numbers from array of numbers.

function minMax(arr) {
  return {
    min: Math.min(...arr),
    max: Math.max(...arr)
  };
}
  
console.log(minMax([1, 4, 8, 2, 20])); // { max: 20, min: 1 }


// Task 8
//A function that returns average of numbers in array.

function average(arr) {
  const result = arr.reduce(function(prevResult, current) {
    return prevResult + current
  });
  return (result/arr.length).toFixed(2);
  // або 
  //return ( Math.round(result/arr.length * 100) / 100 );  
}
    
console.log(average([1,4,2])); // 2.33
console.log(average([1,4,4])); // 3
console.log(average([1,4,1])); // 2


// Task 9
//A function which concats all first-nested arrays in one array (use reduce)

function concatFirstNestedArrays(arr) {
  return arr.reduce(function(prevRes, current) {
    return [...prevRes, ...current];
    // або
    //const c =[...prevRes];
    //c.push(...current); 
    //return c;
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
            const arrNew = [];
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
  const obj = new Object();
  users.forEach(function(item) {    
    obj[item.id] = item;                            
  });

return obj;
}

console.log(usersToObject(users));


// Task 11
//A function returns array of users that have birthdays in a specific month.

const users = [
  { name: 'John', birthday: '1999-2-12' },
  { name: 'Bill', birthday: '1999-1-19' },
  { name: 'Carol', birthday: '1999-4-11' },
  { name: 'Luce', birthday: '1999-2-22' }
];

function filterUsersByMonth(users, month) {
  return users.filter(function(item) {    
    return item.birthday.split('-')[1] == month /* +1 */ ;                        
  });  
}

console.log(filterUsersByMonth(users, 1)); // [{ name: 'Bill', birthday: '1999-1-19' }]
    // Метод 2
    /*
    
    function filterUsersByMonth(users, month) {     
      return users.filter(function(item) {   
        const today = new Date(2018, month, 1); 
        const arr = item.birthday.split('-').map(Number); 
        const date = new Date(arr[0], arr[1], arr[2]);    
        return date.getMonth() == today.getMonth();
      });   
    }
    
    console.log(filterUsersByMonth(users, 1));
    */
