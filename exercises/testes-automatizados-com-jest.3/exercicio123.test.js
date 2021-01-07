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


/*3 - Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. 
Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.*/


function randomNumber () {
  return Math.floor(Math.random() * 11);
}

test('Teste do exercicio 3.', () => {
  randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);
  expect(randomNumber(2, 2, 2)).toBe(8);
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toBeCalledTimes(1);
  expect(randomNumber).toHaveBeenCalledWith(2, 2, 2);
});

test('mockando função que recebe um parâmetro e retorna seu dobro.', () => {
  randomNumber.mockRestore();
  randomNumber.mockImplementation((a) => a * a);
  expect(randomNumber(2)).toBe(4);
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toBeCalledTimes(1);
  expect(randomNumber).toHaveBeenCalledWith(2);
});
