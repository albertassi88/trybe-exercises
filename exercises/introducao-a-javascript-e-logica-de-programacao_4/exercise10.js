/*Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3];.
Valor esperado no retorno da função: 2.
*/

function arrayRepeat(array){
    let numberRepeat = 0;    
    let counterQuantity = 0;  
    let counter = 0;  
    for (let key1 in array){            
        for (let key2 in array){
            if (array[key1] == array[key2]){
                counter ++;
            }
        }
        if (counter > counterQuantity){
            counterQuantity = counter;
            numberRepeat = array[key1];
        } 
        counter = 0;        
    }
    return numberRepeat;    
}

console.log(arrayRepeat([2, 3, 2, 5, 8, 2, 3]));

