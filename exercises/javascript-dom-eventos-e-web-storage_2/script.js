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


/*8-Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. 
Essa lista deve ser filha do div criado no passo 6;*/
let ul = document.createElement("ul");
let numbers = ["um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez"];
for (let num of numbers){
    let li = document.createElement("li");
    li.innerText = num;
    ul.appendChild(li);
    div4.appendChild(ul);
}


/*9-Adicione 3 tags h3, todas sendo filhas do div criado no passo 2.*/
let h3 = "";
for (let x=0; x<3; x++){ 
    h3 = document.createElement("h3"); 
    div1.appendChild(h3);
}


//Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:

/*1-Adicione a classe title na tag h1 criada;*/
h1.className = "title";


/*2-Adicione a classe description nas 3 tags h3 criadas;*/
let h3Class = document.querySelectorAll("h3");
for (let x=0; x<3; x++){ 
    h3Class[x].className = "description";
}



console.log(div1);