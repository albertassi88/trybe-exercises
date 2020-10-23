
/*
Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, 
"negative" se for negativo e "zero" caso contrário.
*/

let valor = "positivo";

function program(){
    if (valor == "positivo"){
        return "positive";
    }else if (valor == "negativo"){
        return "negative"
    }else{
        return "zero";
    }
}

console.log(program());
