/*Crie um <fieldset> para os seguintes dados pessoais:
Nome - Texto, Limite de 40 caracteres, Campo obrigatório, Email - Texto, Limite de 50 caracteres,
Campo obrigatório, CPF - Texto, Limite de 11 caracteres, Campo obrigatório, Endereço - Texto,
Limite de 200 caracteres, Campo obrigatório, Cidade - Texto, Limite de 28 caracteres,
Campo obrigatório, 
Estado ComboBox, Todos os estados do Brasil, Utilize estruturas de repetição via JavaScript 
para gerar os <option>, Campo obrigatório
Tipo - Radio Button, Casa, Apartamento, Campo obrigatório*/

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

let inputRadioCasa = document.createElement("input");
inputRadioCasa.id = "casa"
inputRadioCasa.value = "casa";
inputRadioCasa.className = "radio";
inputRadioCasa.type = "radio";
let labelRadioCasa = document.createElement("label");
labelRadioCasa.innerHTML = "Casa";
labelRadioCasa.appendChild(inputRadioCasa);

let inputRadioApt = document.createElement("input");
inputRadioApt.id = "apt"
inputRadioApt.value = "apt";
inputRadioApt.className = "radio";
inputRadioApt.type = "radio";
let labelRadioApt = document.createElement("label");
labelRadioApt.innerHTML = "Apartamento";
labelRadioApt.appendChild(inputRadioApt);

fieldset.appendChild(labelNome);
fieldset.appendChild(labelEmail);
fieldset.appendChild(labelCpf);
fieldset.appendChild(labelEndereco);
fieldset.appendChild(labelCidade);
fieldset.appendChild(legend);
fieldset.appendChild(comboBox);
fieldset.appendChild(labelRadioCasa);
fieldset.appendChild(labelRadioApt);
body.appendChild(fieldset);


/*Crie outro <fieldset> para dados do seu último emprego, Resumo do currículo - TextArea,
Limite de 1000 caracteres, Campo obrigatório, Cargo - Texto, Limite de 40 caracteres,
Campo obrigatório, Descrição do cargo - Texto, Limite de 500 caracteres, Campo obrigatório,
Data de início - Texto, Verificar o formato da data dd/mm/aaaa.
O dia deve ser > 0 e <= 31, O mês deve ser > 0 e <= 12, O ano não pode ser negativo.
Caso alguma das condições for inválida no momento do envio do formulário, 
exibir mensagem de erro contextualizada, Campo obrigatório*/
