/*1 - Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. 
Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.*/

function randomNumber () {
  return Math.floor(Math.random() * 11);
} 

test('Teste do exercicio 1.', () => {
  randomNumber = jest.fn().mockReturnValue(10);
  expect(randomNumber()).toBe(10);
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toBeCalledTimes(1);
});


/*2 - Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo 
segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.*/


function randomNumber () {
  return Math.floor(Math.random() * 11);
} 

test('Teste do exercicio 2.', () => {
  randomNumber = jest.fn().mockImplementation((a, b) => a / b);
  expect(randomNumber(40, 4)).toBe(10);
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toBeCalledTimes(1);
  expect(randomNumber).toHaveBeenCalledWith(40, 4);  
});