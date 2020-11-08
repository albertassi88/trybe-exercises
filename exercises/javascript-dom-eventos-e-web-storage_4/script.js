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


let buttonId = document.querySelector("#botao0");
let inputText = document.querySelector("#texto0");


function btName(){
    buttonId.addEventListener("click", function(){      
        let result = "";
        
        if (inputText.value != ""){
            result = inputText.value;              
        }else{
            alert("Erro! Favor digitar um nome.");
        }        
        inputText.value = "";    
        localStorage.setItem("nome", result);         
    });    
}
btName();

let name = localStorage.getItem("nome"); 
let h2 = document.createElement("h2");
h2.id = "nameId"
h2.innerHTML = (`Bem Vindo(a) ${name}`);
body.append(h2);


