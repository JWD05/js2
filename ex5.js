// Write a function  ...

// 1. That logs “The current date and time is “ - the current date and time  (Anonymous function)
const currentDateTime = () =>{let currentDT = Date();
console.log(`The current date and time is ${currentDT}`)};
currentDateTime();

// 2. That prints “I’m ready” after 5 seconds. (Anonymous function)
//  Watch Javascript functions : https://www.youtube.com/watch?v=Ho2h5BWSHDM
let dialoguet = () => {console.log(`I am ready.`)};
setTimeout(dialoguet, 5000);
//setTimeout();
// 3. To convert today’s temperature from Celsius to Fahrenheit 
        // a) Celsius to Fahrenheit: (°C × 9/5) + 32 = °F
        // b) Fahrenheit to Celsius: (°F − 32) x 5/9 = °C
