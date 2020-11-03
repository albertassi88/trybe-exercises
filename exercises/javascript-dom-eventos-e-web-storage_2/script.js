/*1-Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;*/
let body = document.querySelector("body");
let h1 = document.createElement("h1");
let texto = document.createTextNode("Exercício 5.2 - JavaScript DOM");
h1.appendChild(texto);
body.appendChild(h1);


/*2-Adicione a tag div com a classe main-content como filho da tag body;*/
let div1 = document.createElement("div");
div1.className = "main-content";
body.appendChild(div1);


/*3-Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;*/
let div2 = document.createElement("div");
div2.className = "center-content";
div1.appendChild(div2);



console.log(body);