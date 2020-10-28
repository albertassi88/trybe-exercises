/*Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3];.
Valor esperado no retorno da função: 6.
*/

function array(arrayTeste){
    let menor = 0;
    for (let key in arrayTeste){
        if(arrayTeste[key] < menor){
            menor = key;
        }
    }
    return menor;    
}

console.log(array([2, 4, 6, 7, 10, 0, -3]));
