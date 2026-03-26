function calculateNetProfit(venda, produto, operacional) {
    // valida se são números
    if (typeof venda !== 'number' || typeof produto !== 'number' || typeof operacional !== 'number') {
        throw new Error('Os valores devem ser numeros');
    }

    // valida se são negativos
    if (venda < 0 || produto < 0 || operacional < 0) {
        throw new Error('Os valores não podem ser negativos');
    }

    let resultado = (venda - produto - operacional);

    return resultado;
}

if (typeof module !== 'undefined') {
    module.exports = { calculateNetProfit };
}