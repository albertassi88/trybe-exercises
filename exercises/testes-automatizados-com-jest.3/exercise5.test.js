/*5 - Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação 
original e crie os testes necessários para validar.*/

const service = require("./exercise4");

test('mockando função para receber um parâmetro e retornar em caixa baixa', () => {

    const primeira = jest.spyOn(service, "firstFunction").mockImplementation(a => a.toLowerCase());
    
    expect(primeira('TESTE')).toBe('teste');
    expect(primeira).toHaveBeenCalled();
    expect(primeira).toHaveBeenCalledTimes(1);
    expect(primeira).toHaveBeenCalledWith('TESTE');  
    
    service.firstFunction.mockRestore();
    expect(service.firstFunction("teste")).toBe('TESTE');
});