const prompt = require(`prompt-sync`)({signt: true});

console.log(`Enter x:`)
let x = Number(prompt(`> `));
console.log(`Enter y:`);
let y = Number(prompt(`> `));

while(x % y > 0){
    x += 1;
    console.log(x);
}

console.log(`${x} is divisible by ${y}`);