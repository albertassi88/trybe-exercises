/*Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
Valor esperado no retorno da função: Fernanda.
*/

function arrayNomes(nomes){
    let nome = "";
    for (let key in nomes){
        if (nomes.length > nome.length){
            nome = nomes[key];
        }
    }
    return nome;
}

console.log(arrayNomes(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));