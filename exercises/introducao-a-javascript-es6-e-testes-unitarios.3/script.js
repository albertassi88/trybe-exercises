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
/*c) Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por 
parâmetro sofreu alterações*/
const array = [1, 2, 3, 4];
myRemoveWithoutCopy(array, 2);
assert.strictEqual(array.length, 3);
//d) Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado*/
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);


/*4 - A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível 
por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas 
por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num 
não seja um número*/

const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}
//a) Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
assert.strictEqual(myFizzBuzz(15), 'fizzbuzz');
//b) Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
assert.strictEqual(myFizzBuzz(3), 'fizz');
//c) Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
assert.strictEqual(myFizzBuzz(5), 'buzz');
/*d) Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é 
o esperado*/
assert.strictEqual(myFizzBuzz(7), 7);
//e)Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
assert.strictEqual(myFizzBuzz('a'), false);


/*5 - Compare dois objetos (JSON) para verificar se são idênticos ou não*/

const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};
//a)
assert.deepStrictEqual(obj1, obj2);
assert.notDeepStrictEqual(obj1, obj3);
assert.notDeepStrictEqual(obj2, obj3);


/*6 - Praticando TDD
Nessa parte os exercícios estão divididos em dois grupos: primeiro, você vai escrever código 
baseado nos testes. Depois você lerá um código e o que ele tem que trazer de resposta. A partir 
disso, você escreverá testes e os usará de base para alterar o código. Como assim? Bem, vamos 
passo a passo!
Escrevendo código para testes
Dados os casos de testes abaixo, escreva as funções de forma a passar nos testes. É importante 
nunca alterar os testes ou as variáveis já escritas no código :
Escreva a função addOne para passar nos testes já implementados.*/

//Parte 1
const assert = require('assert');
// escreva a função addOne aqui

const addOne = (myArray) => {
  const newArray = [];
  for (let index=0; index<myArray.length; index++){
    newArray.push(myArray[index] + 1);
  }
  return newArray;
};

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);


//Parte 2
//Escreva a função wordLengths para passar nos testes já implementados.

const assert = require('assert');
// escreva a função wordLengths aqui

const wordLengths = (words) => {
  const tamanho = [];
  for (let index=0; index<words.length; index++){
    tamanho.push(words[index].length);
  }
  return tamanho;
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);