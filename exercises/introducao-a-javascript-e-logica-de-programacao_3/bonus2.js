/*6- Faça um programa que diz se um número definido numa variável é primo ou não.
Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com 
quaisquer outros números dá resto diferente de zero.
Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de 
fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.
*/

let number = 17;
let counter = 0;

for (let x=0; x<=number; x++){    
    if (number % x == 0){
        counter ++;
    }      
}
if (counter != 2){
    console.log(`${number} não é número primo!`)
}else {
    console.log(`${number} é número primo!`)
}  