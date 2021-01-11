import './App.css';


/*Crie uma lista de tarefas simples seguindo os passos abaixo:
agora, chame a função dentro do seu componente App (não se esqueça da sintaxe JSX!). Insira o valor que você quiser, salve a página e inicie-a rodando o comando npm 
start .
por fim, crie uma array de compromissos e use a função map para que cada item do array apareça, como um item de lista, no seu componente App.*/


const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const array = ['ler a biblia', 'estudar', 'trabalhar', 'ir ao cinema'];

function App() {
  return (
    array.map((element) => task(element))
  );
}

export default App;
