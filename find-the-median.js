function findTheMedian(arr) {
  const sortedArray = arr.sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedArray.length / 2);

  const median =
    sortedArray.length % 2 === 0
      ? (sortedArray[middleIndex - 1] + sortedArray[middleIndex]) / 2
      : sortedArray[middleIndex];

  const centralElement = sortedArray.indexOf(median);
  return centralElement;
}

console.log(findTheMedian([0, 1, 2, 4, 6, 5, 3]));
