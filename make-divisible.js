const prompt = require(`prompt-sync`)({signt: true});

console.log(`Enter x: `);
let x = Number(prompt(`> `));
console.log(`Enter y: `)
let y = Number(prompt(`> `));

while(x % y !== 0){
    console.log(x);
    x ++;
}

console.log(`${x} is divisible by ${y}.`);