/*Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3];.
Valor esperado no retorno da função: 2.
*/


function array(numeros){
    
    for (let x=0; x<numeros.length; x++){
        
        if (numeros.indexOf(numeros[x]) != x){
            return true;
        }else{
            return false;
        }
    
    }

}
console.log(array([2, 3, 2, 5, 8, 2, 3]));