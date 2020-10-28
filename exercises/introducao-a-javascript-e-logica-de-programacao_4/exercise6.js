/*Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
Exemplo de palíndromo: arara.
verificaPalindrome("arara");
Retorno esperado: true
verificaPalindrome("desenvolvimento");
Retorno esperado: false
*/

function verificaPalindrome(palavra){
    let palavraPalindrome = "";
    for (let letras = palavra.length - 1; letras>=0; letras--){
        palavraPalindrome = palavraPalindrome + palavra[letras];
    }   
    if (palavra === palavraPalindrome){
        return true;
    }else {
        return false;
    }
}

console.log(verificaPalindrome("arara"));