/*Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let media = 0;


for (let x=0; x<numbers.length; x++){
    media = media + numbers[x] / numbers.length;     
}

console.log(media);