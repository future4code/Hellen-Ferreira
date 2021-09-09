```function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
let salarioFixo = Number(2000)
let comissao = (qtdeCarrosVendidos * 100) + (valorTotalVendas * 0.05)
let salarioFinal = salarioFixo + comissao
if(qtdeCarrosVendidos > 0) {
  return salarioFinal
} else { 
  return salarioFixo
}
}```