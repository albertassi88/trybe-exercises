/*1-Crie um <fieldset> para os seguintes dados pessoais:
Nome - Texto, Limite de 40 caracteres, Campo obrigatório, Email - Texto, Limite de 50 caracteres,
Campo obrigatório, CPF - Texto, Limite de 11 caracteres, Campo obrigatório, Endereço - Texto,
Limite de 200 caracteres, Campo obrigatório, Cidade - Texto, Limite de 28 caracteres,
Campo obrigatório, 
Estado ComboBox, Todos os estados do Brasil, Utilize estruturas de repetição via JavaScript 
para gerar os <option>, Campo obrigatório
Tipo - Radio Button, Casa, Apartamento, Campo obrigatório*/

let body = document.querySelector("body");
let form = document.querySelector("form");
let fieldset = document.createElement("fieldset");
fieldset.id = "field";
let legend = document.createElement("legend");
legend.innerHTML = "Cadastro de Currículo";
let divCadastro = document.querySelector(".cadastro");

let labelNome = document.createElement("label");
labelNome.innerHTML = "Nome";
let inputNome = document.createElement("input");
inputNome.maxLength = "40";
inputNome.required;
inputNome.type = "text";
inputNome.name = "nome";
labelNome.appendChild(inputNome);

let labelEmail = document.createElement("label");
labelEmail.innerHTML = "E-mail";
let inputEmail = document.createElement("input");
inputEmail.maxLength = "50";
inputEmail.required;
inputEmail.type = "text";
inputEmail.name = "email";
labelEmail.appendChild(inputEmail);

let labelCpf = document.createElement("label");
labelCpf.innerHTML = "CPF";
let inputCpf = document.createElement("input");
inputCpf.maxLength = "11";
inputCpf.required;
inputCpf.type = "text";
inputCpf.name = "cpf";
labelCpf.appendChild(inputCpf);

let labelEndereco = document.createElement("label");
labelEndereco.innerHTML = "Endereço";
let inputEndereco = document.createElement("input");
inputEndereco.maxLength = "200";
inputEndereco.required;
inputEndereco.type = "text";
inputEndereco.name = "endereco";
labelEndereco.appendChild(inputEndereco);


let labelCidade = document.createElement("label");
labelCidade.innerHTML = "Cidade";
let inputCidade = document.createElement("input");
inputCidade.maxLength = "28";
inputCidade.required;
inputCidade.type = "text";
inputCidade.name = "cidade";
labelCidade.appendChild(inputCidade);

let comboBox = document.createElement("select");
comboBox.name = "estado";
comboBox.id = "select";
let estados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];
for (let index=0; index<estados.length; index++){
    let option = document.createElement("option");
    option.value = estados[index];
    option.innerHTML = estados[index];
    comboBox.appendChild(option);
}

let fieldRadio = document.createElement("fieldset");
fieldRadio.id = "fieldRadio";
let legendRadio = document.createElement("legend");
legendRadio.innerText = "Moradia";
fieldRadio.appendChild(legendRadio);

let inputRadioCasa = document.createElement("input");
inputRadioCasa.id = "casa"
inputRadioCasa.value = "casa";
inputRadioCasa.className = "radio";
inputRadioCasa.type = "radio";
inputRadioCasa.name = "casa";
let labelRadioCasa = document.createElement("label");
labelRadioCasa.innerHTML = "Casa";
labelRadioCasa.appendChild(inputRadioCasa);

let inputRadioApt = document.createElement("input");
inputRadioApt.id = "apt"
inputRadioApt.value = "apt";
inputRadioApt.className = "radio";
inputRadioApt.type = "radio";
inputRadioApt.name = "apt";
let labelRadioApt = document.createElement("label");
labelRadioApt.innerHTML = "Apartamento";
labelRadioApt.appendChild(inputRadioApt);

fieldRadio.appendChild(labelRadioCasa);
fieldRadio.appendChild(labelRadioApt);

fieldset.appendChild(labelNome);
fieldset.appendChild(labelEmail);
fieldset.appendChild(labelCpf);
fieldset.appendChild(labelEndereco);
fieldset.appendChild(labelCidade);
fieldset.appendChild(legend);
fieldset.appendChild(comboBox);
fieldset.appendChild(fieldRadio);
form.appendChild(fieldset);
divCadastro.appendChild(fieldset);


/*2-Crie outro <fieldset> para dados do seu último emprego, Resumo do currículo - TextArea,
Limite de 1000 caracteres, Campo obrigatório, Cargo - Texto, Limite de 40 caracteres,
Campo obrigatório, Descrição do cargo - Texto, Limite de 500 caracteres, Campo obrigatório,
Data de início - Texto, Verificar o formato da data dd/mm/aaaa.
O dia deve ser > 0 e <= 31, O mês deve ser > 0 e <= 12, O ano não pode ser negativo.
Caso alguma das condições for inválida no momento do envio do formulário, 
exibir mensagem de erro contextualizada, Campo obrigatório*/


/*3-Logo abaixo do formulário, crie um botão que:
Chame uma função JavaScript e interrompa o fluxo automático do form utilizando o preventDefault().
Execute as validações que foram pedidas ao longo da montagem do formulário.
Monte uma <div> com o consolidado dos dados que foram inseridos no formulário.*/

let botao = document.querySelector("#botao");
let fieldTextArea = document.querySelector("#fieldTextArea");
form.appendChild(fieldTextArea);

function data(){  
    botao.addEventListener("click", function(event){       

        event.preventDefault();
        let data = document.querySelector("#data").value;
        let arrayData = data.split("/");
        let dia = arrayData[0];
        let mes = arrayData[1];
        let ano = arrayData[2];

        if (!(dia > 0 && dia <=31 && mes > 0 && mes <=12 && ano > 0)){
            alert("Erro! Data inválida");
        }

        let inputs = document.querySelectorAll("input[type=text], textarea");        
        let resultado = "";
        for (let index=0; index<inputs.length; index++){
            let inputsArray = inputs[index];            

            if (inputsArray.value == ""){
                inputsArray.className = "erro";
                resultado += `Favor preencher o campo ${inputsArray.name}.\n`;               
            }else {
                inputsArray.className = "";                
            }            
        }        

        if (resultado !== ""){
            alert(resultado);            
        }else {            
            form.reset();
        }        
    });      
} 
data();



