function calculateROI(investimento, receita) {
    // valida se são números
    if (typeof investimento !== 'number' || typeof investimento !== 'number') {
        throw new Error('Os valores devem ser numeros');
    }

    // valida se são negativos
    if (investimento <= 0 || receita <= 0) {
        throw new Error('Os valores não podem ser negativos');
    }



    let resultado = (((receita-investimento)/investimento)*100);

    return resultado;
}

if (typeof module !== 'undefined') {
    module.exports = { calculateROI };
}