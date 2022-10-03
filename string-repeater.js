const prompt = require(`prompt-sync`)({signt: true});

let init = prompt(`Please enter some text: `);
let init2 = init;

console.log(init);

while(init.length < 10){
    init += init2;

    console.log(init);
}