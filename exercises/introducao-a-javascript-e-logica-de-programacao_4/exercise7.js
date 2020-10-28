/*Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1];.
Valor esperado no retorno da função: 4.
*/


function array(arrayTeste){
    let maior = 0;
    for (let key in arrayTeste){
        if(arrayTeste[key] > maior){
            maior = key;
        }
    }
    return maior;    
}

console.log(array([2, 3, 6, 7, 10, 1]));