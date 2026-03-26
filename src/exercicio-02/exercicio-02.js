function calculateDiscount(valorTotal) {
    if (typeof valorTotal !== 'number' || valorTotal < 0) {
      throw new Error("Valor inválido");
    }
  
    let desconto = 0;
  
    if (valorTotal > 500) {
      desconto = 0.20;
    } else if (valorTotal > 100) {
      desconto = 0.10;
    }
  
    const valorFinal = valorTotal * (1 - desconto);
    return Math.round(valorFinal * 100) / 100;
  }
  if (typeof module !== 'undefined') {
  module.exports = { calculateDiscount }};