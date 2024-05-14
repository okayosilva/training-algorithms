function processData(input) {
  input
    .trim()
    .split("\n")
    .forEach((line) => {
      const [operation, type, words] = line.split(";");
      const wordList = words.split(" ");

      if (operation === "S") {
        console.log(
          type === "M"
            ? splitCamelCase(wordList[0].slice(0, -2))
            : splitCamelCase(wordList[0])
        );
      } else {
        console.log(
          type === "M"
            ? combineCamelCase(wordList) + "()"
            : type === "C"
            ? capitalizeFirstLetter(combineCamelCase(wordList))
            : combineCamelCase(wordList)
        );
      }
    });
}

function splitCamelCase(str) {
  return str
    .replace(/([A-Z])/g, " $1")
    .trim()
    .toLowerCase();
}

function combineCamelCase(words) {
  return words.reduce((result, word, index) => {
    return index === 0
      ? word.toLowerCase()
      : result + word.charAt(0).toUpperCase() + word.slice(1);
  }, "");
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

processData(`
S;M;plasticCup()
C;V;mobile phone  
C;C;code swarm
S;C;LargeSoftwareBook
C;M;white sheet of paper
S;V;pictureFrame
S;C;OrangeHighlighter
`);
