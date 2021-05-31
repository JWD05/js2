// Use while loop to display the numbers between 20 and 30(inclusive).
// Inputs: None
// Outputs: Message: 20, 21, …,29, 30.
let n=20;
let message = "";
while(n<31){
    message += n+", ";
    n++;
}
console.log(message);