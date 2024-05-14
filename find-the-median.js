function findMedian(arr) {
  if (arr.length === 0) {
    return null;
  }

  arr.sort((a, b) => a - b);
  const middleIndex = Math.floor(arr.length / 2);
  
  if (arr.length % 2 === 1) {
    return arr[middleIndex];
  } else {
    return (arr[middleIndex - 1] + arr[middleIndex]) / 2;
  }
}

console.log(findMedian([0, 1, 2, 4, 6, 5, 3]));
