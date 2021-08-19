
  //Interpretação:
  // 1 - a) Serão impressos novos arrays separadamente com nome e apelido.
  // 2 - a) Serão impressos apenas os nomes dos arrays.
  // 3 - a) Será impresso todos os itens que não tem como apelido "Chijo".

  //Prática:

  // 1 - 
//   const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]
 // a) 
//  const novoArray = pets.map((item, index, array) => {
//      return item.nome
//  }) 
//  console.log(novoArray)

// b)
// const novoArraySalsicha = pets.filter((pets) => {
//     return pets.raca === "Salsicha"
// }).map(extrairNome)
// console.log(novoArraySalsicha)

function extrairNome(objeto) {
return objeto.nome
}

// c) 
// const novoArrayPoodle = pets.filter((pets) => {
//     return pets.raca === "Poodle"
// }).map(mensagemDesconto)


// function mensagemDesconto(pets) {
//     console.log("Você ganhou um cupom de desconto de 10% para tosar o/a", pets.nome)
// }

// 2 - 
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

//a) 
// const novoArrayProdutos = produtos.map((item) => {
//      return item.nome
//  }) 
//  console.log(novoArrayProdutos)

//b 
const novoArrayProdutos = produtos.map((item) => {
    console.log(item.nome, item.preco - item.preco * 0.05)
})

// function desconto (produtos) {
//    produtos.preco = preco - (5*100)
// }



//c)
// const novoArrayBebidas = produtos.filter((produtos) => {
//     return produtos.categoria === "Bebidas"
// }).map(extrairNome)
// console.log(novoArrayBebidas)

//d)
// const novoArrayYpe = produtos.filter((produtos) => {
//     return produtos.nome.includes("Ypê")
// }).map(extrairNome)
// console.log(novoArrayYpe)

//e)
// const novoArrayYpe = produtos.filter((produtos) => {
//     return produtos.nome.includes("Ypê")
// }).map(mensagemPrecoYpe)

// function mensagemPrecoYpe(produtos) {
//     console.log(`Compre ${produtos.nome} por ${produtos.preco}`)
// }