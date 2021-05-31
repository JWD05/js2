// Use a for loop to display the numbers from 100 to 1000 increasing by 50 each time.
// Inputs: None
// Outputs: Message: 100, 150, 200, 250, …, 950, 1000.
let numSeries = 100;
let message = '';
for (let numSeries = 100; numSeries <=1000; numSeries+=50){
    message += `${numSeries}, `;
}
console.log(message);