/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

   console.log("Bem vindo ao jogo de Blackjack!")

   const cartaUsuario1 = comprarCarta()
   const cartaUsuario2 = comprarCarta()
   const cartaComputador1 = comprarCarta()
   const cartaComputador2 = comprarCarta()
   const resultadoUsuario = cartaUsuario1.valor + cartaUsuario2.valor
   const resultadoComputador = cartaComputador1.valor + cartaComputador2.valor
   
   if(confirm("Quer iniciar uma nova rodada?")) {
      console.log("Usuário - cartas:", cartaUsuario1.texto, cartaUsuario2.texto, "-", resultadoUsuario)
      console.log("Computador - cartas:", cartaComputador1.texto, cartaComputador2.texto, "-", resultadoComputador)
   } else {
      console.log("O jogo acabou!")
   }

let usuario = cartaUsuario1.valor + cartaUsuario2.valor
let computador = cartaComputador1.valor + cartaComputador2.valor

if(usuario > computador) {
   console.log("O usuário venceu!")
} else if (computador > usuario) {
   console.log("O computador venceu!")
} else if (usuario === computador) { 
   console.log("O jogo empatou!")
} else {

}
