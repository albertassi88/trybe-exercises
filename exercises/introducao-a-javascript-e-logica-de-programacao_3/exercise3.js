/*Agora inverta o lado do triângulo. Por exemplo:
*/

let n = 5;


for (let linha=0; linha<n; linha++){
    let triangulo = "";
    for (let coluna=0; coluna<n; coluna++){
        if (coluna < n - linha){
            triangulo = triangulo + " ";    
        }else{
            triangulo = triangulo + "*";
        }
    }        
    console.log(triangulo);
}


