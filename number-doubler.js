const prompt = require(`prompt-sync`)({signt: true});

console.log(`Enter a number: `);
let x = Number(prompt(`> `));

while(x <= 100){
    x = x * 2;
    console.log(x);
}