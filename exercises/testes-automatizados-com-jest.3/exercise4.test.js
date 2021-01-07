
/*4 - Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e 
retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, 
mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve 
receber três strings e concatená-las.*/

const service = require("./exercise4");
jest.mock("./exercise4");
  
describe("testando implementações", () => {
    test('mockando função para receber um parâmetro e retornar em caixa baixa', () => {
        service.firstFunction.mockImplementation((str) => str.toLowerCase());       
    
        expect(service.firstFunction('TESTE')).toBe('teste');
        expect(service.firstFunction).toHaveBeenCalled();
        expect(service.firstFunction).toHaveBeenCalledTimes(1);
        expect(service.firstFunction).toHaveBeenCalledWith('TESTE');        
    });

    test("mockando função que recebe um parâmetro e retorna a última letra", () => {
        service.secondFunction.mockImplementation((str) => str.charAt(str.length - 1));

        expect(service.secondFunction('teste')).toBe('e');
        expect(service.secondFunction).toHaveBeenCalled();
        expect(service.secondFunction).toHaveBeenCalledTimes(1);
        expect(service.secondFunction).toHaveBeenCalledWith('teste');     
    });    

    test("mockando função que recebe 3 parâmetros e os concatena", () => {
        service.thirdFunction.mockImplementation((str1, str2, str3) => str1.concat(str2, str3));

        expect(service.thirdFunction('te', 's', 'te')).toBe('teste');
        expect(service.thirdFunction).toHaveBeenCalled();
        expect(service.thirdFunction).toHaveBeenCalledTimes(1);
        expect(service.thirdFunction).toHaveBeenCalledWith('te', 's', 'te');     
    }); 
});