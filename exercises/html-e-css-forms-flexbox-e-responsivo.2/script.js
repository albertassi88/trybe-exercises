/*Adicione um framework CSS de sua escolha ao formulário que você construiu na última aula e 
o utilize para estilizar o formulário.
Sugestões: Bulma, Bootstrap, Semantic UI e Materialize.

Adicione uma biblioteca JavaScript de date picker ao formulário que você construiu na última 
aula. Utilize essa biblioteca no campo "Data de início" do formulário. Você pode remover as 
validações de data que adicionou, uma vez que a biblioteca se encarregará de permitir somente 
datas válidas.
Sugestões: DatePickerX e Pickaday.

Adicione uma biblioteca JavaScript de validações ao formulário que você construiu na última 
aula. Utilize essa biblioteca para substituir as validações que você fez manualmente.
Sugestões: Just-validate e popup-validation*/

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
inputNome.className = "form-control";
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
inputEmail.className = "form-control";
labelEmail.appendChild(inputEmail);

let labelCpf = document.createElement("label");
labelCpf.innerHTML = "CPF";
let inputCpf = document.createElement("input");
inputCpf.maxLength = "11";
inputCpf.required;
inputCpf.type = "text";
inputCpf.name = "cpf";
inputCpf.className = "form-control";
labelCpf.appendChild(inputCpf);

let labelEndereco = document.createElement("label");
labelEndereco.innerHTML = "Endereço";
let inputEndereco = document.createElement("input");
inputEndereco.maxLength = "200";
inputEndereco.required;
inputEndereco.type = "text";
inputEndereco.name = "endereco";
inputEndereco.className = "form-control"
labelEndereco.appendChild(inputEndereco);


let labelCidade = document.createElement("label");
labelCidade.innerHTML = "Cidade";
let inputCidade = document.createElement("input");
inputCidade.maxLength = "28";
inputCidade.required;
inputCidade.type = "text";
inputCidade.name = "cidade";
inputCidade.className = "form-control";
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
let divRadio = document.createElement("div");

let inputRadioCasa = document.createElement("input");
inputRadioCasa.id = "casa"
inputRadioCasa.value = "casa";
inputRadioCasa.type = "radio";
inputRadioCasa.name = "casa";
let labelRadioCasa = document.createElement("label");
labelRadioCasa.innerHTML = "Casa";
labelRadioCasa.appendChild(inputRadioCasa);

let inputRadioApt = document.createElement("input");
inputRadioApt.id = "apt"
inputRadioApt.value = "apt";
inputRadioApt.className = "form-check-input";
inputRadioApt.type = "radio";
inputRadioApt.name = "apt";
let labelRadioApt = document.createElement("label");
labelRadioApt.innerHTML = "Apartamento";
labelRadioApt.className = "form-check-label";
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
//divCadastro.appendChild(fieldset);
divRadio.appendChild(fieldRadio);

let botao = document.querySelector("#botao");
let fieldTextArea = document.querySelector("#fieldTextArea");
form.appendChild(fieldTextArea);

function botaoEnviar(){  
    botao.addEventListener("click", function(event){       

      event.preventDefault();
       
      validation.init("#myForm");
               
        
         
    });      
} 
botaoEnviar();

function dataPikaday(){
    let picker = new Pikaday({ 
        field: document.getElementById('datepicker') 
    });
}
dataPikaday();


