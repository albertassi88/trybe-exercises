/*Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será 
sempre ímpar:
Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;

   *
  * *
 *   *
*******

*/

let n = 7;
let meio = (n + 1) / 2;
let direita = meio;
let esquerda = meio;
let piramide = "";

for (let coluna=1; coluna<=meio; coluna++){
    for (let linha=0; linha<=n; linha++){
        if (linha == direita || linha == esquerda){
            piramide += "*";
        }else if (linha > 1 && coluna == meio){
            piramide += "*";
        }
        else {
            piramide += " ";
        }
    }
    console.log(piramide);
    piramide = "";
    direita += 1;
    esquerda -= 1;
}