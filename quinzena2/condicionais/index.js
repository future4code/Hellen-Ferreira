//Interpretação:
/* 1 -
      a) O código realiza a seguinte operação: Se o resto da divisão 2 for 
igual a 0, irá passar no teste, caso contrário, não irá passar.
      b) Se o resto da divisão por 2 for igual a 0. 
      c) Se o resto da divisão por 2 for diferente de 0. */ 

/* 2 -
      a) O código serve para dizer para o usuário o valor de alguma
      fruta específica. 
      b) "O preço da fruta maçã é R$ 2.25" 
      c) Além de ser impresso o valor da pêra, o código continuaria rodando e 
      imprimiria o preço em default. */      
      
/* 3 -
      a) Está declarando uma variável pedindo ao usuário um número. 
      b) Se for 10, true. Se for -10, false.  
      c) O console.log foi dado fora do bloco de if, por isso da erro no console.
      O correto seria dar console.log(mensagem) ainda dentro das chaves.*/   

//Prática:

// 1 - 

const qualIdade = Number(prompt('Insira sua idade'))
if (qualIdade >= 18) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir")
}
      
// 2 -

const turnoEstudo = prompt('Insira M se você estuda no período matutino, V se você estuda no período vespertino ou N se você estuda no período noturno')

if (turnoEstudo === 'M') {
    console.log('Bom Dia!')
} else if (turnoEstudo === 'V') {
    console.log('Boa Tarde!')
} else if (turnoEstudo === 'N') {
    console.log('Boa Noite!')
} else {
    console.log('Insira um turno válido.')
}

// 3 - 

switch (turnoEstudo) {
    case "M":
        console.log("Bom dia!")
    break
    case "V":
        console.log("Boa tarde!")
    break
    case "N":
        console.log("Boa noite!")
    break
}

// 4 + desafio 1: 

const generoFilme = "fantasia"
const qualGenero = prompt('Insira o gênero do filme')
const valorIngresso = prompt('Insira o valor do ingresso') 
const lanchinho = prompt('Insira o que deseja comer assistindo') 

if (qualGenero === generoFilme && valorIngresso <= 15) {
    console.log("Bom filme!", "Aproveite o seu", lanchinho)
} else {
    console.log("Escolha outro gênero")
}

// Desafio 2: 
/*- Nome completo;
- Tipo de jogo: IN indica internacional; e DO indica doméstico;
- Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
- Categoria: pode ser as opções 1, 2, 3 ou 4;
- Quantidade de ingressos

 O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . 
 Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total
 que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). 
 Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. Lembrando 
 que o valor de jogos internacionais é o mesmo de jogos domésticos,
 mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)*/


  const nomeCompleto = prompt('Digite seu nome completo')
  const tipoDoJogo = prompt('Digite IN se o jogo for internacional ou DO se o jogo for doméstico')
  const etapaDoJogo = prompt('Digite SF se é uma semi-final, DT se é uma decisão de terceiro lugar ou FI se é uma final')
  const categoriaDoJogo = prompt('Qual categoria deseja? 1, 2, 3, ou 4?')
  const quantidadeDeIngressos = prompt('Digite quantos ingressos deseja')

// const categoria1 = {
//     semiFinal: 1320,
//     terceiroLugar: 660,
//     final: 1980
// }
// const categoria2 = {
//     semiFinal: 880,
//     terceiroLugar: 440,
//     final: 1320
// }
// const categoria3 = {
//     semiFinal: 1320,
//     terceiroLugar: 660,
//     final: 1980
// }
// const categoria4 = {
//     semiFinal: 1320,
//     terceiroLugar: 660,
//     final: 1980
// }

// if (categoria1 )