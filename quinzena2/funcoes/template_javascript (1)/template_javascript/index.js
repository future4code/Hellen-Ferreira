// Interpretação de código:
// 1 - a) A variável multiplicada por 5. 
// b) A função não seria impressa no console porque dentro da função 
// o console.log tb n é invocado.
// 2 - a) A função vai imprimir o texto em minúsculo e ver se está
// incluso a palavra "cenoura" no texto. 
// b) true, true e false.

// Escrita de código: 
// 1 - a)
function descricaoDoUsuario() {
    // const minhaDescricao = prompt("Faça uma descrição sobre você")
    // return minhaDescricao
    console.log('Meu nome é Hellen, tenho 20 anos, sou carioca e atualmente estudo programação')
}

descricaoDoUsuario()

// b) 

function infoUsuario (nome, idade, cidade, profissao) {
    
    console.log("Meu nome é", nome, ", tenho", Number(idade), "anos, moro no", cidade, "e sou", profissao)
}

infoUsuario("hellen", 20, "Rio de Janeiro", "fotógrafa.")

// 2 - a)
function soma (num1, num2) {
    const resultado = Number(num1) + Number(num2)
    return resultado
}

console.log(soma(2, 3))

// b) 
function maiorOuIgual (outroNumero1, outroNumero2) {
    const resultadoBooleano = outroNumero1 >= outroNumero2
    return resultadoBooleano
}

console.log(maiorOuIgual(3, 3))

// c)
function numeroEhPar(numPar) {
    const parSim = numPar / 2 % 2
    console.log(parSim === 0)
}

numeroEhPar(13)

// d)
function mensagemDoUsuario(mensagem) {
 console.log(mensagem.toUpperCase())
 console.log(mensagem.length)
}

mensagemDoUsuario("Oi, tudo bem?")

// 3 -

let primeiroNumero = prompt("Insira o primeiro número para cálculos.")
let segundoNumero = prompt("Insira o segundo número para cálculos.")
console.log(`Números inseridos: ${Number(primeiroNumero)}, ${Number(segundoNumero)}`)

function soma2() {
const resultadoDaSoma = Number(primeiroNumero) + Number(segundoNumero)
console.log("Soma:", resultadoDaSoma)
}

function subtracao() {
    const resultadoDaSubtracao = Number(primeiroNumero) - Number(segundoNumero)
console.log("Subtração:", resultadoDaSubtracao)
}

function multiplicacao () {
    const resultadoDaMultiplicacao = Number(primeiroNumero) * Number(segundoNumero)
console.log("Multiplicação:", resultadoDaMultiplicacao)
}

function divisao () {
    const resultadoDaDivisao = Number(primeiroNumero) / Number(segundoNumero)
console.log("Divisão:", resultadoDaDivisao)
    
}

soma2()
subtracao()
multiplicacao()
divisao()

// DESAFIO

//1
const textoUsuario = (texto) => {
    return texto
}
console.log(textoUsuario("Hoje é domingo de manhã, dia de descanso."))

const valor = (valor1, valor2) => {
    const resultadoValores = valor1 + valor2
}

// 2 
function teoremaPitagoras(hip, a, b) {
    const hipotenusa = hip * hip 
    const cateto1 = a * a 
    const cateto2 = b * b
    console.log(hipotenusa = (cateto1 + cateto2))
}
teoremaPitagoras(10, 5, 2)