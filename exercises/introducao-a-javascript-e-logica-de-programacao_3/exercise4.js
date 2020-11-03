/*Depois, faça uma pirâmide com n asteriscos de base:

  *
 ***
*****

*/
let n = 5;
let meio = (n + 1) / 2;
let esquerda = meio;
let direita = meio;
let piramide = "";

for (let linha=0; linha<=meio; linha++){    
    for (let coluna=0; coluna<=n; coluna++){
        if (coluna < direita && coluna > esquerda){
            piramide += "*";
        }else{
            piramide += " ";
        }
    }
    console.log(piramide);
    piramide = "";
    direita += 1;
    esquerda -= 1;
}