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


/*4-Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;*/
let p1 = document.createElement("p");
p1.innerText = "Dom";
div2.appendChild(p1);


/*5-Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;*/
let div3 = document.createElement("div");
div3.className = "left-content";
div1.appendChild(div3);


/*6-Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;*/
let div4 = document.createElement("div");
div4.className = "right-content";
div1.appendChild(div4);


/*7-Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. 
Esse elemento deve ser filho do div criado no passo 5;*/
let img = document.createElement("img");
img.src = "https://picsum.photos/200";
img.className = "small-image";
div3.appendChild(img);

console.log(div1);