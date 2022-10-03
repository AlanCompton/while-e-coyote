const prompt = require(`prompt-sync`)({signt: true});

let init = Number(prompt(`Enter a number: `));

function fib(init) {

    if (init <= 1) {
      return n;
    } else {
      init = (init - 2) + (init - 1);
      return init;
    }
  }

  console.log(fib(8))