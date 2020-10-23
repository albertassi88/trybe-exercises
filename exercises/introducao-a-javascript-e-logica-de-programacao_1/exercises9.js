/*
Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos 
uma das três for ímpar. Caso contrário, ele retorna false.
Bonus: use somente um if.
*/

let numero1 = 10;
let numero2 = 10;
let numero3 = 15;

if ((numero1 % 2 == 1) | (numero2 % 2 == 1) | (numero3 % 2 == 1)){
    console.log("true");
}else{
    console.log("false");
}