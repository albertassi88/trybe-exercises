/*Ordene o array numbers em ordem crescente e imprima seus valores;
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (x=0; x<numbers.length; x++){
    for (j=0; j<numbers.length; j++){
        if (numbers[x] < numbers[j]){
            let posicao = numbers[x];
            numbers[x] = numbers[j];
            numbers[j] = posicao;
        }
    }
}

console.log(numbers);