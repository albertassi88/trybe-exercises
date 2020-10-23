let numero1 = 5;
let numero2 = 10;
let numero3 = 15;

function numerosMaior(){
    if (numero1 > numero2 && numero1 > numero3){
        return numero1;
    }else if (numero2 > numero1 && numero2 > numero3){
        return numero2;
    }else{
        return numero3;
    }
}

console.log(numerosMaior());