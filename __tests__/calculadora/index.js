const { Calculadora } = require("../..");

describe('Calculadora', () => {
    let calculadora

    beforeEach(() => {
        calculadora = new Calculadora();
    });

    test('Verifica instancia de calculadora', () => {
        expect(calculadora).toBeInstanceOf(Calculadora)
    });

    test('Soma correta', () => {
        expect(calculadora.soma(5, 2)).toBe(7)
    });
    
    test('Exception soma sem valores informados', () => {
        expect(() => calculadora.soma()).toThrowError("Valores não informados");
    });

    test('Subtração correta', () => {
        expect(calculadora.subtracao(5, 2)).toBe(3);
    });

    test('Subtração incorreta', () => {
        expect(calculadora.subtracao(5, 2)).not.toBe(0);
    });

    test('Multiplicação correta', () => {
        expect(calculadora.multiplicacao(5, 2)).toBe(10);
    });

    test('Divisão correta', () => {
        expect(calculadora.divisao(5, 2)).toBe(2.5);
    });

    test('Divisão incorreta', () => {
        expect(calculadora.divisao(5, 2)).not.toBe(10);
    });

    test('Raiz quadrada correta', () => {
        expect(calculadora.raizQuadrada(25)).toBe(5);
    });

    test('Fatorial correto', () => {
        expect(calculadora.fatorial(5)).toBe(120);
    });

    test('Exception divisão por zero', () => {
        expect(() => calculadora.divisao(1, 0)).toThrowError("Divisão por zero");
    });

    test('Exception raiz quadrada de numero negativo', () => {
        expect(() => calculadora.raizQuadrada(-25)).toThrowError("Valor informado negativo.");
    });

    test('Exception fatorial de numero negativo', () => {
        expect(() => calculadora.fatorial(-25)).toThrowError("Valor informado negativo.");
    });

    test('Mock de soma', () => {
        const mockSoma = jest.fn().mockReturnValue(7);
        calculadora.soma = mockSoma;

        expect(calculadora.soma(5, 2)).toBe(7);
    });
});