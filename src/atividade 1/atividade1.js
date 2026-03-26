function calculateFinalPrice(custo, percentualLucro) {
    // valida se são números
    if (typeof custo !== 'number' || typeof percentualLucro !== 'number') {
        throw new Error('Os valores devem ser numeros');
    }

    // valida se são negativos
    if (custo < 0 || percentualLucro < 0) {
        throw new Error('Os valores não podem ser negativos');
    }

    let resultado = custo * (1 + (percentualLucro / 100));

    return resultado;
}

if (typeof module !== 'undefined') {
    module.exports = { calculateFinalPrice };
}