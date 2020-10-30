function mudarTexto(texto){
    let p = document.querySelector(".center-content p").innerText = texto;
}
mudarTexto("Se Deus quiser eu me vejo trabalhando com desenvolvimento de software em uma grande empresa.");


function mudarCor1(cor){
    let c = document.querySelector(".main-content").style.backgroundColor = cor; 
}
mudarCor1("rgb(76,164,109)");


function mudarCor2(cor){
    let c = document.querySelector(".main-content .center-content").style.backgroundColor = cor; 
}
mudarCor2("white");


function texto(textoCorreto){
    let h1 = document.querySelector(".title").innerHTML = textoCorreto;
}
texto("Exercício 5.1 - JavaScript");


function textoMaiusculo(texto){
    let p = document.querySelectorAll(".center-content p");
    for (let x=0; x<p.length; x++){
        p[x].style.textTransform = texto;
    }    
}
textoMaiusculo("uppercase");


function consoleP(){
    let p = document.querySelectorAll("p")
    return p;
}
console.log(consoleP());
