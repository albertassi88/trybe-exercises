/*Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, 
imprima a mensagem: "nenhum valor ímpar encontrado";
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let quantidade = 0;

for (let x=0; x<numbers.length; x++){
    if (numbers[x] % 2 == 1){
        quantidade = quantidade + 1;
    } 
}

if (quantidade > 0){
    console.log(`foram encontrados ${quantidade} números ímpares.`);
}else {
    console.log("nenhum valor ímpar encontrado");
}