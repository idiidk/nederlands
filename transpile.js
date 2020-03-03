const { Transpiler } = require("./transpiler");

//Input handling
const data = [];

function init() {
  process.stdin.setEncoding("utf8");

  process.stdin.on("readable", () => {
    let chunk;
    while ((chunk = process.stdin.read()) !== null) {
      data.push(chunk);
    }
  });

  process.stdin.on("end", () => {
    const input = data.join("");
    const transpiler = new Transpiler(input);
    const output = transpiler.transpile();

    process.stdout.write(output);
  });
}

init();
