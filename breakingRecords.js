function breakingRecords(scores) {
  let highScore = scores[0],
    breakHigh = 0,
    lowScore = scores[0],
    breakLow = 0;

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > highScore) {
      highScore = scores[i];
      breakHigh += 1;
    } else if (scores[i] < lowScore) {
      lowScore = scores[i];
      breakLow += 1;
    }
  }

  return { breakHigh, breakLow };
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
