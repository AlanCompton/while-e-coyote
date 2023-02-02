const prompt = require(`prompt-sync`)({signt: true});

console.log(`Enter a string`);
let x = prompt(`> `);

while(x.length <= 10){
    x = x + x;
    console.log(`> ${x}`);
}