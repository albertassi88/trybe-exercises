let body = document.querySelector("body");
let input = document.createElement("input");
input.id = "texto";
input.required = "required";  // mostra a mensagem para preencher o campo
input.type = "text";

input.placeholder = "Qual é o seu nome?"
body.appendChild(input);

let button = document.createElement("button");
button.innerHTML = "Enviar";
button.id = "botao";
body.appendChild(button);


let buttonId = document.querySelector("#botao");
let inputText = document.querySelector("#texto");


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

