/*1 - A função sum(a, b) retorna a soma do parâmetro a com o b
a) Teste se o retorno de sum(4, 5) é 9
b) Teste se o retorno de sum(0, 0) é 0
c) Teste se a função sum lança um erro quando os parametros são 4 e "5" (string 5)
d) Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")*/

const assert = require('assert');

function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('parameters must be numbers');
    }

    return a + b;
}

assert.strictEqual(sum(4, 5), 9, '4 + 5 é igual a 9'); //a)
assert.strictEqual(sum(0, 0), 0, '0 + 0 é igual a 0'); //b)
assert.throws(() => {  //c)
    sum(4,'5');
});
assert.throws(() => {  //d)
    sum(4, '5');
}, /^Error: parameters must be numbers$/);


/*2 - A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o 
elemento item caso ele exista no array
a) Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
b) Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
c) Verifique se o array passado por parâmetro não sofreu alterações
d) Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado*/

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

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4], 'o valor 3 tem dentro do meu array');  //a)
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4], 'o resultado é diferente');  //b)

const array = [1, 2, 3, 4];  //c)
myRemove(array, 4);
assert.deepStrictEqual(array, [1, 2, 3, 4]);

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);  //d)


/*3 - A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem 
o elemento item caso ele exista no array
a) Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
b) Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
c) Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por 
parâmetro sofreu alterações
d) Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado*/



