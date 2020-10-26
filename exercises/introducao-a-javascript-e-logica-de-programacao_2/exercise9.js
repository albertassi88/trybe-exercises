/*Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos 
por 2.
*/

let numeros = [];
let divisao = 0;

for (let x=1; x<=25; x++){
    numeros.push(x);
}

console.log(numeros);

for (let x=0; x<numeros.length; x++){
    divisao = numeros[x] / 2;
    console.log(divisao);
}



