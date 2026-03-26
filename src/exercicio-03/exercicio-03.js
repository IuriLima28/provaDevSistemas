function calculateShipping(peso, km) {

     if (typeof peso !== 'number' || typeof km !== 'number') {
        throw new Error('Os valores devem ser numeros');
    }

    // valida se são negativos
    if (peso < 0 || km < 0) {
        throw new Error('Os valores não podem ser negativos');
    }

    let frete = (peso * 0.5) + (km * 0.1)

        return frete;
}


if (typeof module !== 'undefined') {
    module.exports = { calculateShipping };
}

//   valor.textContent = `R$${preco}`;
//   porcent.textContent = `${porcentagem}%`;
//   desconto = preco * (porcentagem / 100);
//   resposta.textContent = `${preco - desconto}`;
//   t.textContent = `Um produto de R$${preco} com ${porcentagem}% de desconto fica com R$${preco - desconto} e conomizamdo R$${desconto}`;