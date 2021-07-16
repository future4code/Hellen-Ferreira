let nome 
let idade 
console.log(typeof nome)
console.log(typeof idade)
// Deu underfined porque a variável não tem valor atribuído.

nome = prompt("Qual seu nome?")
idade = prompt("Qual sua idade?")
console.log(typeof nome)
console.log(typeof idade)
// Agora com o valor já atribuído a variável já tem valores atribuído, string.

console.log("Olá,", nome, "você tem", idade, "anos.")

let estudante = prompt("Você estuda?")
let trabalho = prompt("Você trabalha?")
let dev = prompt("Você está aprendendo a desenvolver?")

estudante = "sim" 
trabalho = "não"
dev = "sim" 

console.log("Você é estudante?", estudante)
console.log("Você trabalha?",trabalho)
console.log("Você está aprendendo a desenvolver?", dev)

let a = 10 
let b = 20 
let c = 10 

/* Tendo como base o raciocínio dos copos, trocar os líquidos só seria possível se tivesse um terceiro copo, 
que nesse caso, não precisa imprimir com o console.log já que não foi solicitado */

a = b 
b = c 

console.log("o valor de a é", a)
console.log("o valor de b é", b)

