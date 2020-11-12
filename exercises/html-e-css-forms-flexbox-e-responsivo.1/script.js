let body = document.querySelector("body");
let fieldset = document.createElement("fieldset");
fieldset.id = "field";
let legend = document.createElement("legend");
legend.innerHTML = "Cadastro de Currículo";

let labelNome = document.createElement("label");
labelNome.innerHTML = "Nome";
let inputNome = document.createElement("input");
inputNome.maxLength = "40";
inputNome.required;
labelNome.appendChild(inputNome);

let labelEmail = document.createElement("label");
labelEmail.innerHTML = "E-mail";
let inputEmail = document.createElement("input");
inputEmail.maxLength = "50";
inputEmail.required;
inputEmail.type = "texto";
labelEmail.appendChild(inputEmail);

let labelCpf = document.createElement("label");
labelCpf.innerHTML = "CPF";
let inputCpf = document.createElement("input");
inputCpf.maxLength = "11";
inputCpf.required;
inputCpf.type = "texto";
labelCpf.appendChild(inputCpf);

let labelEndereco = document.createElement("label");
labelEndereco.innerHTML = "Endereço";
let inputEndereco = document.createElement("input");
inputEndereco.maxLength = "200";
inputEndereco.required;
inputEndereco.type = "texto";
labelEndereco.appendChild(inputEndereco);

let labelCidade = document.createElement("label");
labelCidade.innerHTML = "Cidade";
let inputCidade = document.createElement("input");
inputCidade.maxLength = "28";
inputCidade.required;
inputCidade.type = "texto";
labelCidade.appendChild(inputCidade);

let comboBox = document.createElement("select");
comboBox.name = "estado";
comboBox.id = "select";
let estados = ["RJ", "SP", "MG", "ES", "RS", "RN"];
let nomes = ["Rio de Janeiro", "São Paulo", "Minas Gerais", "Espirito Santo", "Rio Grande do Sul", "Rio Grande do Norte"];
for (let index=0; index<estados.length; index++){
    let option = document.createElement("option");
    option.value = estados[index];
    option.innerHTML = nomes[index];
    comboBox.appendChild(option);
}

let inputRadio = document.createElement("input");
inputRadio.id = "casa"
inputRadio.value = "casa";
inputRadio.type = "radio";
let labelRadio = document.createElement("label");
labelRadio.innerHTML = "Casa";
labelRadio.appendChild(inputRadio);

fieldset.appendChild(labelNome);
fieldset.appendChild(labelEmail);
fieldset.appendChild(labelCpf);
fieldset.appendChild(labelEndereco);
fieldset.appendChild(labelCidade);
fieldset.appendChild(legend);
fieldset.appendChild(comboBox);
fieldset.appendChild(labelRadio);
body.appendChild(fieldset);



