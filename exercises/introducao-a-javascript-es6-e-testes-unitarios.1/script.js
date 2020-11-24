/*Parte 1
1 - Faça as modificações necessárias na função para que o seu comportamento respeite 
o escopo no qual cada variável foi declarada.
Modifique a estrutura da função para que ela seja uma arrow function.
Modifique as concatenações para template literals.*/
      
const testingScope = (escopo) => { 
    if (escopo === true) { 
        let ifScope = `Não devo ser utilizada fora do meu escopo (if)\nótimo, fui utilizada no escopo !`;
        console.log(ifScope);
    } else {
        const elseScope = `Não devo ser utilizada fora meu escopo (else)`;
        console.log(elseScope);
    }    
}
testingScope(true);


/* 2 - Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem 
crescente. Utilize template literals para que a chamada console.log(oddsAndEvens); retorne "Os 
números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
Bônus (opcional): tente fazer o mesmo exercício utilizando o métodoarray.sort(). Spoiler: 
É possível realizar uma função que ordene qualquer array de números.*/

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const numbersArray = (a, b) => {
    return a - b;
}
console.log(`"Os números ${oddsAndEvens.sort(numbersArray)} se encontram ordenados de forma crescente!.`);


/* Parte 2
1 - Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que 
você utilize o que aprendeu sobre let, const, arrow functions e template literals.
Crie uma função que receba um número e retorne seu fatorial.
Na matemática, o fatorial de um número não negativo N, com a notação N!, é o produto de todos 
os inteiros menores ou iguais a N. Exemplo: 4! = 4 3 2 * 1 = 24.
Bônus (opcional): tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver
com uma linha.*/


const numbersFactorial = (numbers) => {
    if (numbers == 0 || numbers == 1) {
        return 1;
    } else {
        return numbers * numbersFactorial(numbers - 1);
    }   
}
console.log(numbersFactorial(5));


/* 2 - Crie uma função que receba uma frase e retorne qual a maior palavra.*/

const longestWord = (frase) => {
    const array = frase.split(" ");
    const resultado = array.sort((a, b) => {
        return b.length - a.length;
    });
    return resultado[0];
}
console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));


/* 3 - Crie uma página que contenha:
Um botão ao qual será associado um event listener;
Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável 
clickCount é atualizada.*/

const botao = document.querySelector("button");
const body = document.querySelector("body");

let clickCount = 0;
const p = document.createElement("p");

botao.addEventListener("click", () => {   
   
    p.innerText = clickCount ++; 
    body.appendChild(p);
    
});


/* 4 - Crie um código JavaScript com a seguinte especificação:
Não se esqueça de usar template literals
Função 1: Escreva uma função que vai receber uma string como parâmetro. Sua função deverá 
procurar pela letra x em uma string qualquer que você determinar e substituir pela string que 
você passou como parâmetro. Sua função deve retornar essa nova string.
Exemplo:
String determinada: "Tryber x aqui!"
Parâmetro: "Bebeto"
Retorno: "Tryber Bebeto aqui!"
Um array com escopo global, que é o escopo do arquivo JS, nesse caso, contendo cinco strings 
com suas principais skills.
Função 2: Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. 
Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 
via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa 
nova string.
Exemplo:
"Tryber x aqui!
Minhas cinco principais habilidades são:
JavaScript;
HTML; ...
#goTrybe".*/