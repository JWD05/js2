// the following code has errors, find them and fix them and use node to check it is working

const inputArr1 = [8, 4, 2, 3, 5];
const inputArr2 = [33, 4, 12, 8, 7, 9];
let mutualElements = [];

for (let i = 0; i < inputArr1.length; i++) {
  for (let j = 0; j < inputArr2.length; j++) {
    if ((inputArr1[j] === inputArr2[i])) {
      mutualElements.push(inputArr1[j]);
    }
  }
}
console.log(mutualElements);
