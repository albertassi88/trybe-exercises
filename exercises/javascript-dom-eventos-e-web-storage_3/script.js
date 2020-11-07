function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();

//Exercícios

/*1-O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva 
uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> 
com ID "days". Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente 
Segunda-feira e Terça-feira.
Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. 
Ex: <li class="day holiday">24</li>
Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday. 
Ex: <li class="day friday">4</li>*/
  
function dayCalendar(){
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let ul = document.querySelector("#days");    

    for (let index=0; index<dezDaysList.length; index++){
        let days = dezDaysList[index];
        let li = document.createElement("li");        
        li.innerHTML = days;
        ul.appendChild(li);

        if (days == 24 || days == 31){
            li.className = "day holiday";
        }else if (days == 4 || days == 11 || days == 18){
            li.className = "day friday";
        }else if (days == 25){
            li.className = "day holiday friday";
        }else {
            li.className = "day";
        }
    }        
}
dayCalendar();


/*2 = Exercício 2:
Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão 
com o nome "Feriados".
Adicione a este botão a ID "btn-holiday".
Adicione este botão como filho/filha da tag <div> com classe "buttons-container".*/

let divBt = document.querySelector(".buttons-container");

function holiday(feriados){
    let btn = document.createElement("button");
    btn.innerText = feriados;
    btn.id = "btn-holiday";
    divBt.appendChild(btn);
}
holiday("Feriados");


/*3 - Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo
dos dias que possuem a classe "holiday".
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à 
configuração inicial com a cor "rgb(238,238,238)".*/

let dayCor = document.querySelector("#btn-holiday");
let liHoliday = document.querySelectorAll(".holiday");

dayCor.addEventListener("click", function(){

    for (let index=0; index<liHoliday.length; index++){        
        let color = "green";
        if (liHoliday[index].style.backgroundColor !== color){
            liHoliday[index].style.backgroundColor = color;
        }else {
            liHoliday[index].style.backgroundColor = "rgb(238,238,238)";
        }
    }     
});


/*4-Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um 
botão com o nome "Sexta-feira".
Adicione a este botão o ID "btn-friday".
Adicione este botão como filho/filha da tag <div> com classe "buttons-container".*/

let divBtContainer = document.querySelector(".buttons-container");

function friday(name){
    let btnFriday = document.createElement("button");
    btnFriday.innerHTML = name;
    btnFriday.id = "btn-friday";
    divBtContainer.appendChild(btnFriday);
}
friday("Sexta-feira");


/*5-Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto 
exibido nos dias que são Sexta-feira.
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à 
configuração inicial exibindo os dias.*/

let btn = document.querySelector("#btn-friday");
let dayFriday = document.querySelectorAll(".friday");

btn.addEventListener("click", function(){

    for (let index=0; index<dayFriday.length; index++){
        let name = "Sexta-feira";
        let fryday = dayFriday[index];
         if (dayFriday[index].innerHTML != name){
            dayFriday[index].innerHTML = name;
        }else{
            dayFriday[index].innerHTML = Number(fryday.previousElementSibling.innerHTML) + 1;
        }
    }
});


/*6- Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do 
mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto 
deve retornar ao tamanho original.
Dica - Propriedade: event.target.*/

let liDays = document.querySelector("#days");

function dayZoomOver(){
    liDays.addEventListener("mouseover", function(event){
        event.target.style.fontSize = "28px";    
    });
}
dayZoomOver();


function dayZoomOut(){
    liDays.addEventListener("mouseout", function(event){
        event.target.style.fontSize = "20px";
    });
}
dayZoomOut();


/*7-Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber 
como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a 
tag <span> contendo a tarefa.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".*/

let divTasks = document.querySelector(".my-tasks");

function tasks(nameTasks){
    let spanTaks = document.createElement("span");
    spanTaks.innerHTML = nameTasks;
    divTasks.appendChild(spanTaks);
}
tasks("cozinhar");


/*8-Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. 
Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag 
<div> com a classe task.
O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".*/

function colortasks(color){
    let div = document.createElement("div");
    div.className = "task";
    div.style.backgroundColor = color;
    divTasks.appendChild(div);
}
colortasks("green");


/*9-Implemente uma função que adiciona um evento que ao clicar no elemento com a tag <div> referente a 
cor da sua tarefa, atribua a este elemento a classe task selected, ou seja, quando sua tarefa possuir a 
classe task selected ela estará selecionada.
Ao clicar novamente no elemento a sua classe deverá voltar a ser somente task, ou seja, esta tarefa está 
deixando de ser uma tarefa selecionada.*/

let divTask = document.querySelector(".task");

function taskSelected(){

    divTasks.addEventListener("click", function(){
        let classTask = "task selected";
        if (divTask.className != classTask){
            divTask.className = classTask;
        }else{
            divTask.className = "task";
        }        
    });
}
taskSelected();


/*10-Implemente uma função que adiciona um evento que ao clicar em um dia do mês no calendário, atribua 
a este dia a cor da legenda da sua tarefa selecionada.
Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial 
rgb(119,119,119).*/


let daysColor = document.querySelector("#days");
let colorTask = document.querySelector(".task");
function dayTask(){         
    daysColor.addEventListener("click", function(event){
        let color = colorTask.style.backgroundColor;   
        if (event.target.style.color !== color){
            event.target.style.color = color;
        }else {
            event.target.style.color = "rgb(119,119,119)";
        }
    });  
}
dayTask();


