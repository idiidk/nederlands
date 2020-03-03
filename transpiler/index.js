class Transpiler {
  constructor(data) {
    this.data = data;
  }

  transformLines(lines) {
    return lines.filter(line => line);
  }

  transpile() {
    const unfilteredLines = this.data.split(/(.+)/gm);
    const lines = this.transformLines(unfilteredLines);

    for (const line of lines) {
      const tokens = line.split(" ");

      console.log(tokens);
    }

    return "";
  }
}

module.exports = { Transpiler };
