/*Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o 
final da string word. Considere que a string ending sempre será menor que a string word.
Valor de teste: "trybe" e "be"
Valor esperado no retorno da função: true
verificaFimPalavra("trybe", "be");
Retorno esperado: true
verificaFimPalavra("joaofernando", "fernan");
Retorno esperado: false
*/

function wordEnding(word, ending){
    let wordEnd = "";
    if (ending.length < word.length){
        for (let x = word.length - ending.length; x<word.length; x++){
            wordEnd += word[x];
        }
        if (wordEnd == ending){
            return true;
        }else {
            return false;
        }
    }else {
        return (`Erro: string ending: ${ending} é maior que a string word: ${word}!`)
    } 
}

console.log(wordEnding("trybe", "be"));