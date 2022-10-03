const prompt = require(`prompt-sync`)({signt: true});

/* 
- g et input from the user 
- while loop: allows user to input multiple numbers
- print out the sum at the end
- variable to hold the sum
- += to add to our sum
- reprompt inside the while loop
*/

let num = Number(prompt(`Enter any number greater than 0. Type 0 when complete - `));
let sum = 0;

while(num > 0){

    sum += num;
    num = Number(prompt(`Enter another number: `));

    console.log(sum);
}