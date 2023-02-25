// 1. 
// Define array, and log equations. Function uses a for loop that cycles through array and counts element length.

let itemsArray = [3, 9, 23, 64, 2, 8, 28, 93];
console.log([7] - [0]);
items.push(88);
console.log([8] - [0]);

function findAverage(itemsArray){
    let average = 0
    for (let i = 0; i < itemsArray.length; i++){
    let currentNum = itemsArray[i]
    average += currentNum;    
    }
    average = average / itemsArray.length
    return average;
}
findAverage( [3, 9, 23, 64, 2, 8, 28, 93, 88]);


// 2.
// Define name array. Then a for loop is used to cycle through the array to calculate element length in order to find average.  

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
function findAverage(names){
    let average = 0
    for (let i = 0; i < names.length; i++){
    let currentNum = names[i]
    average += currentNum;    
    }
    average = average / names.length
    return average;
}
findAverage( [3, 5, 3, 5, 4, 3]);
for (i = 0; i < names.length; i++){
    console.log(names [i]);
}

// 5/6.
// Loop is used to calculate sum. 

let nameLengths = ([ 3, 5, 3, 5, 4, 3])
for (i = 0; i < nameLengths.length; i++){
    console.log(sum);
}

// 7.
// This function allows a parameter to be used (a number) which impacts how many time my other parameter (hello) is repeated. 

function addHello(word, n){
 console.log(word.repeat(n)); 
}
console.log('hello', 3);

// 8.
// This function uses two parameters (first and last name) so a full name is logged. 

function fullName(firstName, lastName){
    console.log(firstname + lastName);
}
console.log('River', 'Nuzzo');

// 9.
// My array is defined first of all, and then my function uses 3 parameters in order to find the sum of three elements from the array. 

let array1 = [10, 20, 20];
var sum = 140
function greaterThan100(num0, num1, num2){
    return (array1[0] + array1[1] + array1[2]) > 100;
}
greaterThan100(array1[0] + array1[1] + array1[2]);


// 10.
// This function is defined in order for average to be calculated from a given array. 

function avg(arr1){
    var sum = 0;

    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i];
    }
    return sum / arr1.length;
}
console.log(avg([1, 4, 5, 6]));

// 11. 
// This function uses two parameters (two seperate arrays) in order to return true if the first array's average is greater than the second. 

function avg(arr0, arr2){
    var sum = 0;

    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i];
    }
    return sum / arr0.length > sum / arr2.length
}
console.log(avg[2, 8, 8], avg[2, 1, 1]);

// 12. 
// First, I used a boolean and defined a variable. Secondly, I used a loop/function that would log true under the given circumstances. 

isHotOutside = yes;

var moneyinPocket = 14;

if (moneyinPocket >= 10 && isHotOutside = yes) {
 console.log('true');

} { else 

  console.log('false');

}

// 13.
// This function uses one parameter (temperature) so when an argument is logged, the function returns a temperature change from celcius to farenheit. 

function celToFar(temperature) {
return (temperature * 1.8) + 32;
}
console.log(0);
