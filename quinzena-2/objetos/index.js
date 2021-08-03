// Interpretação: 

// 1 - a) Será impresso o primeiro nome do elenco, o último e a terceira transmissão 
//        do objeto na arrow.
// 2 - a) Serão impressos os 3 objetos. 
//     b) O espalhamento serve para fazer uma cópia de um objeto para o outro. 
// 3 - a) Vai retornar o objeto pessoa mas somente o "backender". O segundo console
//        irá retornar underfined por não ter essa informação dentro do objeto.
//     b) Isso acontece porque a "altura" não foi informada dentro do objeto. 

// Prática:

//a) Crie um objeto. Ele deve conter duas propriedades:
// nome (string) e apelidos
// (um array que sempre terá exatamente **três apelidos**).
// Depois, escreva uma função que recebe como entrada um objeto 
//e imprime uma mensagem no modelo abaixo**:**
//Agora, usando o operador spread, crie um novo objeto mantendo o valor da 
//propriedade nome, mas com uma nova lista de três apelidos. 
//Depois, chame a função feita no item anterior passando como argumento o novo objeto

const nomeEApelidos = { 
    nome: "Hellen", 
    apelidos: ["Carioca", "Lely", "ou Marina"],
}

function quemSouEu(...nomeEApelidos) {
    console.log(`Me chamo ${nomeEApelidos.nome}, mas pode me chamar de: ${nomeEApelidos.apelidos}`)  
}

quemSouEu()


// const meuNome = nomeEApelidos.nome
// const meusApelidos = nomeEApelidos.apelidos
// console.log(quemSouEu("Meu nome é", meuNome, "mas pode me chamar de", meusApelidos)) 

// const novoObjeto = {
//     ...nomeEApelidos,
//     nome: "Hellen",
//     apelidos2: ["Hellenzita", "Hellenzinha", "Carioquinha"] 


//2
//a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.
//b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

const informa1 = {
    nome1: "Thaís",
    idade1: "22",
    profissao1: "Advogada",
}

const informa2 = {
    nome2: "Paulo",
    idade2: "20",
    profissao2: "Ator",
}

function informacoes(informa1, informa2) {


}