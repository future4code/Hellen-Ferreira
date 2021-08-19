```function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  const menosDeUmaDuzia = Number(1.30)
  const maisDeUmaDuzia = Number(1.00)
  if (quantidade < 12) {
    return menosDeUmaDuzia * quantidade
  } else if (quantidade >= 12){
    return maisDeUmaDuzia * quantidade
  } else {
    
  }
}```