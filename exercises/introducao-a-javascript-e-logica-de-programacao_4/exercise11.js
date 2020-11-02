/*Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
Valor de teste: N = 5.
Valor esperado no retorno da função: 1+2+3+4+5 = 15.
*/

function SumNumber(number){
    let sum = 0;
    for (let x=0; x<=number; x++){
        sum = sum + x;
    }
    return sum;
}

console.log(SumNumber(5));