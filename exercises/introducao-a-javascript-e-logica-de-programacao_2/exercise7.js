/*Utilizando for, descubra qual o menor valor contido no array e imprima-o;
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = numbers.length;

for (let x=0; x<numbers.length; x++){
    if (numbers[x] < menor){
        menor = numbers[x];
    }
}

console.log(menor);