/*1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, 
seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:
*/

for (let linha=0; linha < 5; linha++){
    let quadrado = "";
    for (coluna=0; coluna<5; coluna++){
        quadrado = quadrado + "*";
    }
    console.log(quadrado);    
}

