class Calculadora {
    soma(a, b) {
        return a + b;
    }

    subtracao(a, b) {
        return a - b;
    }

    multiplicacao(a, b) {
        return a * b;
    }

    divisao(a, b) {
        if (b !== 0) {
            return a / b;
        } else {
            throw new Error("Divisão por zero");
        }
    }

    raizQuadrada(a) {
        if (a >= 0) {
            return Math.sqrt(a);
        } else {
            throw new Error("Valor informado negativo.");
        }
    }

    fatorial(a) {
        if (a >= 0) {
            let resultado = 1;
            for (let i = 2; i <= a; i++) {
                resultado *= i;
            }
            return resultado;
        } else {
            throw new Error("Valor informado negativo.");
        }
    }
}

const minhaCalculadora = new Calculadora();