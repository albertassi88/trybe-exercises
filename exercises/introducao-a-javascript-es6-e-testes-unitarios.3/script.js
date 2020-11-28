/*1 - A função sum(a, b) retorna a soma do parâmetro a com o b*/

const assert = require('assert');

function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('parameters must be numbers');
    }

    return a + b;
}
//a) Teste se o retorno de sum(4, 5) é 9
assert.strictEqual(sum(4, 5), 9, '4 + 5 é igual a 9'); 
//b) Teste se o retorno de sum(0, 0) é 0
assert.strictEqual(sum(0, 0), 0, '0 + 0 é igual a 0');
//c) Teste se a função sum lança um erro quando os parametros são 4 e "5" (string 5)
assert.throws(() => {  
    sum(4,'5');
});
//d) Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
assert.throws(() => {  
    sum(4, '5');
}, /^Error: parameters must be numbers$/);


/*2 - A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o 
elemento item caso ele exista no array*/

const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
//a) Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4], 'o valor 3 tem dentro do meu array'); 
//b) Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4], 'o resultado é diferente');  
//c) Verifique se o array passado por parâmetro não sofreu alterações
const array = [1, 2, 3, 4];  
myRemove(array, 4);
assert.deepStrictEqual(array, [1, 2, 3, 4]);
//d) Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);  


/*3 - A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem 
o elemento item caso ele exista no array*/

const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}
//a) Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);
//b) Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);
//c) Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por 
//parâmetro sofreu alterações
const array = [1, 2, 3, 4];
myRemoveWithoutCopy(array, 2);
assert.strictEqual(array.length, 3);
//d) Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado*/
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);


