//Todos os exercícios devem ser realizados utilizando reduce , e se necessário outra HOF , a informação será citada no enunciado.

//1 - Dada uma matriz de matrizes, transforme em uma única matriz.

const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


const flatten = () => {
    return arrays.reduce((previousValue, currentValue) => previousValue.concat(currentValue), []);
};

assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);