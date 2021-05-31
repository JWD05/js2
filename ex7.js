// 1. Declare and initialise an array with 5 names and ages 
//  a) 202,"Barbara", 31
//  b) 203,"David", 22
//  c) 204,"Alex", 35
//   d) 205,"Sue", 24
//  e) Log the length of the array
//  f) Log the last element in the array
//  g) Add John who is 45 years old with id 206 to the end of the array
//  h) Remove the first item from the array
const sampleArray = [];
sampleArray.push([202, "Barbara", 31]);
sampleArray.push([203, "David", 22]);
sampleArray.push([204, "Alex", 35]);
sampleArray.push([205, "Sue", 24]);
console.log(sampleArray.length);
console.log(sampleArray[sampleArray.length-1]);
console.log(sampleArray.push([206, "John", 45]));
console.log(sampleArray.shift());

// Challenge - Use a for loop through the array to search for ID = 205 and update Sue’s name to Susan
// Challenge - Remove an item from the middle of the array. ID=204
