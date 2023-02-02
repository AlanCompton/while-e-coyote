const prompt = require(`prompt-sync`)({signt: true});

console.log(`Enter a number: `);
let x = Number(prompt(`> `));
let y = 0;
let z = 1;
let a = 0;
let i = 1;

console.log(y);

while(i < x){
    console.log(z);
    a = y + z;
    y = z;
    z = a;
    i++;
}