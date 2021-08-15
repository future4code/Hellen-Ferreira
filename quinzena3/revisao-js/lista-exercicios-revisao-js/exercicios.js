// EXERCÍCIO 01
function inverteArray(array) {
let resultadoResultado = []
for(let i = array.length -1; i >= 0; i--){
  resultadoResultado.push(array[i])
}
return resultadoResultado
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
//   let numerosPares = array.filter(numerosPares % 2 === 0).map(numerosPares **2)
//    return numerosPares 
let numeroElevadoADois = []
for(let i = 0; i < array.length; i++) {
  if(array[i] % 2 === 0){
    numeroElevadoADois.push(array[i] **2)
  }
}
     return numeroElevadoADois
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let numerosPares = []
  for(let i = 0; i < array.length; i++) {
    if(array[i] % 2 === 0){
      numerosPares.push(array[i])
    }
}
     return numerosPares
} 

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorNumero = []
  for(let i = 0; i < array.length; i++) {
    if (array[i] > maiorNumero) {
      maiorNumero = array[i]
    }
  }
  return maiorNumero
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
//   const respostas = []
//   const booleano1 = true
//   const booleano2 = false
//   const booleano3 = !booleano2 
//   const booleano4 = !booleano3 
//  let trueOrFalse1 = booleano1 && booleano2 && !booleano4
//  let trueOrFalse2 = (booleano1 && booleano2) || !booleano3
//  let trueOrFalse3 = (booleano2 || booleano3) && (booleano4 || booleano1)
//  let trueOrFalse4 = !(booleano2 && booleano3) || !(booleano1 && booleano3)
//  let trueOrFalse5 = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
//  return respostas.push(trueOrFalse1, trueOrFalse2, trueOrFalse3, trueOrFalse4, trueOrFalse5)
return  [false,false,true,true,true]
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let NNumerosPares = []
  for (let i = 0; NNumerosPares.length < n; i++) {
    if (i % 2 === 0) {
       NNumerosPares.push(i)
    }

  }
    return NNumerosPares
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if ( a === b && b === c){
    return 'Equilátero'
  } else if (a === b || b === c) {
    return 'Isósceles'
  } else {
    return 'Escaleno'
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
  let maiorNumero
  let menorNumero
  let maiorDivisivelPorMenor

  if (num1 > num2) {
    maiorNumero = num1
    menorNumero = num2
  } else {
    maiorNumero = num2
    menorNumero = num1
  }

  maiorDivisivelPorMenor = maiorNumero % menorNumero === 0

  const diferenca = maiorNumero - menorNumero

  return {
    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: maiorDivisivelPorMenor,
    diferenca: diferenca
  }

}


// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  let menor = Infinity
  let maior = -Infinity
  let segundoMenor = Infinity
  let segundoMaior = -Infinity
  let novoArray = []

  for (let i of array) {
    if (i < menor) {
      menor = i
    }
    if (i > maior) {
      maior = i
    }
  }

  for (let i of array) {
    if (i < segundoMenor && i !== menor) {
      segundoMenor = i
    }
    if (i > segundoMaior && i !== maior) {
      segundoMaior = i
    }
  }
  novoArray.push(segundoMaior)
  novoArray.push(segundoMenor)

  return novoArray

}

// EXERCÍCIO 11
function ordenaArray(array) {
  const arrayCompleto = array.length
  for (let i = 0; i < arrayCompleto; i++) {
    for (let u = 0; u < arrayCompleto; u++) {
      if (array[u] > array[u + 1]) {
        let crescente = array[u]
        array[u] = array[u + 1]
        array[u + 1] = crescente
      }
    }
  }
  return array

}

// EXERCÍCIO 12
function filmeFavorito() {
  const filmeFavoritoAstrodev = {
    nome: 'O Diabo Veste Prada',
    ano: Number(2006),
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
  }
  return filmeFavoritoAstrodev
}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
    const filmeFavoritoAstrodev = {
    nome: 'O Diabo Veste Prada',
    ano: Number(2006),
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
  }
  return `Venha assistir ao filme ${filmeFavoritoAstrodev.nome}, de ${filmeFavoritoAstrodev.ano}, dirigido por ${filmeFavoritoAstrodev.diretor} e estrelado por ${filmeFavoritoAstrodev.atores[0]}, ${filmeFavoritoAstrodev.atores[1]}, ${filmeFavoritoAstrodev.atores[2]}, ${filmeFavoritoAstrodev.atores[3]}.`

}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  const retangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: 2 * (lado1 + lado2),
    area: lado1 * lado2
  }
  return retangulo
}

// EXERCÍCIO 15
const pessoa = {
	nome: "Hellen",
	idade: 20,
	email: "contatohellenmarina@gmail.com",
	endereco: "Travessa 44, 84"
}
function anonimizaPessoa(pessoa) {
pessoa.nome = "ANÔNIMO"
return pessoa
}
console.log(anonimizaPessoa)

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
// const adultos = []
// for(let i = 0; i < arrayDePessoas.length; i++) {
//   if(arrayDePessoas.length >= 18){
//     adultos.push(arrayDePessoas[i])
//   }
// }
// return adultos
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
