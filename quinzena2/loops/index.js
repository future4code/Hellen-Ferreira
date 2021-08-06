//Interpretação:

/* 1 -
a) Para cada  


2 - 

a) Os números do array maiores que 18.
b) Sim! for(let numero of lista.lenght) Assim, todas os índices
do array seriam acessados. 

3 - Imprimiria os asteristicos de 1 - 4. 
*/

//Prática:

// 1 - 
// const quaisBichinhos = prompt("Quantos bichinhos de estimação você tem?")
// if (quaisBichinhos <= 0) {
//     console.log("Que pena! Você pode adotar um pet!")
// } else {
//     const quantosBichinhos = prompt(["Digite o nome de cada um deles."])
//     let arrayDeNome = [quantosBichinhos]
//     console.log(arrayDeNome)
// }
//tentativa de lógiga sem sucesso ex. 1:

// const quaisBichinhos = prompt("Quantos bichinhos de estimação você tem?")
// const quantosBichinhos = prompt('Digite o nome de cada um deles.')
// while(quaisBichinhos >= 0) {
//     console.log(quantosBichinhos)
//     quaisBichinhos++
// }
// console.log(quaisBichinhos)

//2 -

//a) Escreva um programa que **imprime** cada um dos valores do array original.

// const arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for(let i = 0; i < arrayOriginal.length; i++) {
//     console.log(arrayOriginal[i])
// }

//b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

// const arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for(let i = 0; i < arrayOriginal.length; i++) {
//     console.log(arrayOriginal[i] / 10)
// }

// c) Escreva um programa que **crie** um novo array contendo, somente, os números pares 
// do array original e **imprima** esse novo array

// const arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for(let i = 0; i < arrayOriginal.length; i++) {
//     const novoArray = arrayOriginal.length / 2
//     const resultado = novoArray % 2 === 0
//     console.log(novoArray[i])
// }

//d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: 
// "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.

// const arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for(let i = 0; i < arrayOriginal.length; i++) {
//     console.log("O elemento do índex", i, "é", arrayOriginal[i])
// }

//e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

// function retornaMaiorNumero(arrayOriginal) {
//     let oMaior = 0;
//     for(let i = 0; i < arrayOriginal.length; i++){
//         if(arrayOriginal[i] > oMaior) {
//             oMaior = arrayOriginal[i]
//         }
//     }
//     return oMaior
// }
// console.log(retornaMaiorNumero([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) 

// function retornaMenorNumero(arrayOriginal) {
//     let oMenor = 0;
//     for(let i = 0; i < arrayOriginal.length; i++){
//         if(arrayOriginal[i] < oMenor) {
//             oMenor = arrayOriginal[i]
//         }
//     }
//     return oMenor
// }

// console.log(retornaMenorNumero([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) 

    
  

