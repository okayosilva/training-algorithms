// function miniMaxSum(arr) {
//   let minValueInArray = arr[0];
//   let maxValueInArray = arr[0];

//   let minValuePossible = 0;
//   let maxValuePossible = 0;

// // O primeiro loop for encontra o menor e o maior valor no array
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < minValueInArray) {
//       minValueInArray = arr[i];
//     } else if (arr[i] > maxValueInArray) {
//       maxValueInArray = arr[i];
//     }
//   }

// // O segundo loop for calcula o menor e o maior valor possíveis
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== minValueInArray) {
//       maxValuePossible += arr[i];
//     }
//     if (arr[i] !== maxValueInArray) {
//       minValuePossible += arr[i];
//     }
//   }
//   console.log(minValuePossible, maxValuePossible);
// }

// miniMaxSum([1, 2, 3, 4, 5]);


// Uma maneira mais eficiente de resolver esse problema é ordenar o array e somar os quatro primeiros e os quatro últimos elementos.

function miniMaxSum(arr) {
  //Aqui, o método sort() é usado para ordenar o array em ordem crescente.  
  arr.sort((a, b) => a - b);
  let minSum = 0;
  let maxSum = 0;

  // O loop for soma os quatro primeiros e os quatro últimos elementos do array.
  for (let i = 0; i < arr.length - 1; i++) {
    minSum += arr[i];
    maxSum += arr[i + 1];
  }

  console.log(minSum, maxSum);
}

miniMaxSum([5, 4, 3, 2, 1]);