const prompt = require(`prompt-sync`)({signt: true});

let num = Number(prompt(`Enter a number: `));

while(num < 100){
    num *= 2;

    console.log(num);
}