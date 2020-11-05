let body = document.querySelector("body");
let input = document.createElement("input");
input.id = "texto";
input.required = "required";  // mostra a mensagem para preencher o campo
input.type = "text";

input.placeholder = "Qual é o seu nome?"
body.appendChild(input);

let button = document.createElement("button");
button.onclick = "nome";
button.innerHTML = "Enviar";
button.id = "botao";
body.appendChild(button);


let botao = document.querySelector("#botao");
let inputTexto = document.querySelector("#texto");


let oi = input.value;





console.log(oi);