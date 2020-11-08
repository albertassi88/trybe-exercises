let body = document.querySelector("body");

for (let x=0; x<6; x++){
    let div = document.createElement("div");  
    let input = document.createElement("input");  
    input.id = "texto"+x;
    input.required = "required";  // mostra a mensagem para preencher o campo
    input.type = "text"+x;
    body.appendChild(input);   

    let button = document.createElement("button");
    button.innerHTML = "Enviar";
    button.id = "botao"+x;
    body.appendChild(button);
    body.appendChild(div);
}

function placeHolder(){
    let txt1 = document.querySelector("#texto0");
    let txt2 = document.querySelector("#texto1");
    let txt3 = document.querySelector("#texto2");
    let txt4 = document.querySelector("#texto3");
    let txt5 = document.querySelector("#texto4");
    let txt6 = document.querySelector("#texto5");
    txt1.placeholder = "Qual é o seu nome?";
    txt2.placeholder = "Digite uma cor de fundo";
    txt3.placeholder = "Digite uma cor do texto";
    txt4.placeholder = "Digite um tamanho para fonte";
    txt5.placeholder = "Digite um espaçamento entre as linhas do texto;";
    txt6.placeholder = "Digite um tipo de fonte";
}
placeHolder();


let buttonId1 = document.querySelector("#botao0");
let inputText1 = document.querySelector("#texto0");
let buttonId2 = document.querySelector("#botao1");
let inputText2 = document.querySelector("#texto1");
let buttonId3 = document.querySelector("#botao2");
let inputText3 = document.querySelector("#texto2");
let buttonId4 = document.querySelector("#botao3");
let inputText4 = document.querySelector("#texto3");
let buttonId5 = document.querySelector("#botao4");
let inputText5 = document.querySelector("#texto4");
let buttonId6 = document.querySelector("#botao5");
let inputText6 = document.querySelector("#texto5");


function btName(){
    buttonId1.addEventListener("click", function(){      
        let result = "";        
        if (inputText1.value != ""){
            result = inputText1.value;              
        }else{
            alert("Erro! Favor digitar um nome.");
        }        
        inputText1.value = "";    
        localStorage.setItem("nome", result);         
    });    
}
btName();

function btColor(){
    buttonId2.addEventListener("click", function(){      
        let result = "";        
        if (inputText2.value != ""){
            result = inputText2.value;              
        }else{
            alert("Erro! Favor digitar uma cor.");
        }        
        inputText2.value = "";    
        localStorage.setItem("cor", result);         
    });    
}
btColor();

function btTexto(){
    buttonId3.addEventListener("click", function(){      
        let result = "";        
        if (inputText3.value != ""){
            result = inputText3.value;              
        }else{
            alert("Erro! Favor digitar uma cor para o texto.");
        }        
        inputText3.value = "";    
        localStorage.setItem("texto", result);         
    });    
}
btTexto();

function btTamanho(){
    buttonId4.addEventListener("click", function(){      
        let result = "";        
        if (inputText4.value != ""){
            result = inputText4.value;              
        }else{
            alert("Erro! Favor digitar um tamanho para a fonte.");
        }        
        inputText4.value = "";    
        localStorage.setItem("tamanho", result);         
    });    
}
btTamanho();

function btEspacamento(){
    buttonId5.addEventListener("click", function(){      
        let result = "";        
        if (inputText5.value != ""){
            result = inputText5.value;              
        }else{
            alert("Erro! Favor digitar um tamanho para o espaçamento.");
        }        
        inputText5.value = "";    
        localStorage.setItem("espaco", result);         
    });    
}
btEspacamento();

function btFonte(){
    buttonId6.addEventListener("click", function(){      
        let result = "";        
        if (inputText6.value != ""){
            result = inputText6.value;              
        }else{
            alert("Erro! Favor digitar um tipo de fonte.");
        }        
        inputText6.value = "";    
        localStorage.setItem("fonte", result);         
    });    
}
btFonte();

let name = localStorage.getItem("nome"); 
let h2 = document.createElement("h2");
h2.id = "nameId"
h2.innerHTML = (`Bem Vindo(a) ${name}`);
body.append(h2);


