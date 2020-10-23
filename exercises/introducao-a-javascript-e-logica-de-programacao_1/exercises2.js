/*
Faça um programa que retorne o maior de dois números. 
Defina no começo do programa duas variáveis com os valores que serão comparados.
*/

let a = 20;
let b = 10;

function maiorNumero(){
    if (a > b){
        return a;
    }else{
        return b;
    }
}

console.log(maiorNumero());