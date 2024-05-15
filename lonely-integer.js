// Operação XOR (^) - Ou exclusivo - retorna 1 se os bits forem diferentes e 0 se forem iguais
// 0 ^ 0 = 0
// 0 ^ 1 = 1

// Quando existe apenas um elemento que não se repete em uma operação XOR (ou exclusivo) bit a bit entre todos os elementos de um conjunto, o resultado será o próprio valor desse elemento único. Isso ocorre porque o XOR de um número com ele mesmo resulta em 0, e o XOR de 0 com qualquer número é o próprio número.

// Portanto, se houver um conjunto de elementos em que todos, exceto um, se repetem, ao realizar uma operação XOR entre todos os elementos, o resultado final será o valor do elemento que não se repete.

function lonelyInteger(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result ^= array[i];
  }
  return result;
}

console.log(lonelyInteger([1, 2, 3, 4, 3, 2, 1]));
