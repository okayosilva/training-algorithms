function sparseArrays(strings, queries) {
  const frequencies = {};

  for (const query of queries) {
    frequencies[query] = 0;
  }

  for (const string of strings) {
    if (frequencies[string] !== undefined) {
      frequencies[string] += 1;
    }
  }

  const output = queries.map((query) => frequencies[query]);
  return output;
}

const strings = ["aba", "baba", "aba", "xzxb"];
const queries = ["aba", "xzxb", "ab"];
console.log(sparseArrays(strings, queries))
