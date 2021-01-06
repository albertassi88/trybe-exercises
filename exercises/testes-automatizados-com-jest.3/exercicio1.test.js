/*1 - Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. 
Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.*/

function randomNumber () {
  return Math.floor(Math.random() * 11);
} 

test('Testando se a função foi chamada.', () => {
  randomNumber = jest.fn().mockReturnValue(10);
  console.log(randomNumber)
  expect(randomNumber()).toBe(10);
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toBeCalledTimes(1);
});
