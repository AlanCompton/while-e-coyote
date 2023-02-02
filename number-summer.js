const prompt = require(`prompt-sync`)({signt: true});

let x = Number(prompt(`Enter some numbers (Type 0 when complete): `));
let y = 0;

while(x !== 0){
    y = y + x;
    x = Number(prompt(`> `));
}

console.log(`End result: ${y}`);