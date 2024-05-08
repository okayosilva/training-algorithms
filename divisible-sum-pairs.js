function divisibleSumPairs(n, k, arr) {
  let numberOfDivisiblePairs = 0;

  for (let index = 0; index < n; index++) {
    for (let pair = 0; pair < n; pair++) {
      if (index !== pair) {
        if ((arr[index] + arr[pair]) % k === 0) {
          numberOfDivisiblePairs += 1;
        }
      }
    }
  }

  return numberOfDivisiblePairs / 2;
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));
