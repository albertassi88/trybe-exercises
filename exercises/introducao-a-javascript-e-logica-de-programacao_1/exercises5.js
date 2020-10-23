/*
Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. 
Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.
Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. Caso os ângulos 
estejam inválidos, o programa deve retornar uma mensagem de erro.
*/

let ladoA = 30;
let ladoB = 50;
let ladoC = 100;
let triangulo = ladoA + ladoB + ladoC;

if (typeof(triangulo) !== "number"){
    console.log("erro");
}else if (triangulo !== 180){
    console.log("false");
}else{
    console.log("true");
}