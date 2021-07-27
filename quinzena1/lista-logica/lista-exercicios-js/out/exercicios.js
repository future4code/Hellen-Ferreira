// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')
  console.log(Number(num1) + Number(num2)) 

}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')
  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
const alturaR = prompt('Digite a altura do retângulo')
const larguraR = prompt('Digite a largura do retângulo') 

console.log(Number(alturaR) * Number(larguraR))
}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
const anoNascimento = prompt('Digite seu ano de nascimento')
const anoAtual = prompt('Digite o ano atual')
console.log(Number(AnoNascimento) - Number(AnoAtual))
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
const pesoIMC = prompt('Digite seu peso')
const alturaIMC = prompt('Digite sua altura')
console.log(Number(pesoIMC)/ Number(alturaIMC * alturaIMC))
}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
let nome = prompt('Digite seu nome')
let idade = prompt ('Digite sua idade')
let email = prompt ('Digite seu email')
const fraseCompleta = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
console.log(fraseCompleta)
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
const cor1 = prompt("Digite sua cor favorita número 1")
const cor2 = prompt("Digite sua cor favorita número 2")
const cor3 = prompt("Digite sua cor favorita número 3")
const topTres = [cor1, cor2, cor3]
console.log(topTres)
}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
let umaPalavra = prompt('Digite uma palavra')
let palavraMaiuscula = umaPalavra.toUpperCase()
console.log(palavraMaiuscula)
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  const custo = prompt('Digite o custo do teatro')
  const ingresso = prompt('Digite o valor do ingresso')
  console.log(Number(custo) / Number(ingresso)) 
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  const palavraUM = prompt('Digite uma palavra')
  const palavraDois = prompt('Digite outra palavra')
console.log(palavraUM.length === palavraDois.length) 
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  const desejo1 = prompt('Digite um doce favorito')
  const desejo2 = prompt('Digite um salgado favorito')
  console.log(desejo1.toUpperCase() === desejo2.toUpperCase())
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  let anoAtualId = prompt('Digite o ano atual') 
  let anoNascimentoId = prompt('Digite o ano de nascimento')
  let anoEmissaoId = prompt('Digite a data de emissão do seu RG') 

  let resultadoId = Number(anoAtualId - anoNascimentoId)
  let resultadoEmissaoId = Number(anoAtualId - anoEmissaoId)

  let renovacao20 = resultadoId <= 20 && resultadoEmissaoId >= 5
  let renovacao30 = (resultadoId > 20) && (resultadoId < 50) && resultadoEmissaoId >= 10
  let renovacao50 = resultadoId > 50 && resultadoEmissaoId >= 15

  let renovar = renovacao20 || renovacao30 || renovacao50

  console.log(renovar)
}
//CONSEGUIIIIIIIIIIIIIIIIIII AAAAAAAAAAAAAAAAAAAAAAAAA MÉM

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui

 let anoAleatorio = prompt('Digite um ano aleatório')
 let resultadoAnoEhBissexto1 = anoAleatorio % 400 === 0
 let resultadoAnoEhBissexto2 = anoAleatorio % 4 === 0 && anoAleatorio % 100 !== 0

 let anoBissexto = resultadoAnoEhBissexto1 || resultadoAnoEhBissexto2

 console.log(anoBissexto)

}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
 let mais18 = prompt('Você tem mais de 18 anos?')
 let ensinoMedio = prompt('Você possui ensino médio completo?')
 let disponibilidade = prompt('Você possui disponibilidade exclusiva durante os horários do curso?')

 const inscricaoValida = mais18.includes('sim') && ensinoMedio.includes('sim') && disponibilidade.includes('sim')

 console.log(inscricaoValida)

}