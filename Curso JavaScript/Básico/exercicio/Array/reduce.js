//Retorne a pessoa mais velha

// const pessoas =  [
//     {nome: 'Luiz', idade: 62},
//     {nome: 'Maria', idade: 23},
//     {nome: 'Eduardo', idade: 55},
//     {nome: 'Letícia', idade: 19},
//     {nome: 'Rosana', idade: 32},
//     {nome: 'Wallace', idade: 47},
// ];


// const maisVelha = pessoas.reduce(function(acumulador,valor){
    
//     if(acumulador.idade > valor.idade) return acumulador
//     return valor;

// })

// console.log(maisVelha)


//--------------------------------------------------
//Some todos os números (Reduce)
//Retorne um array com os pares (Filter)
//Retorne um array com o dobro dos valores (Map)
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];


// const total = numeros.reduce(function(acumulador, valor, indice, array){
//  const total = numeros.reduce(function(acumulador, valor){
// acumulador += valor;

// if(valor % 8 === 0) acumulador.push(valor);
//  if(valor % 2 === 0){
    // acumulador += valor;
//  }

// return acumulador;
//  });

// console.log(total) 
//--------------------------------------------------


// // ****************    Filter + Map + Reduce     ************************

// //Retorne a soma do dobro de todos os pares
// // filtrar pares
// // dobrar os valores
// // reduzir (somar tudo)

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const numerosPares = numeros.filter(function(valor){
//     // Selecionando os números pares
//     return valor % 2 === 0;
// }).map(function(valor){
//     // Multiplicando os pares por 2
//     return valor * 2;
// }).reduce(function(ac, valor){
//     // Somando todos os números pares que foram multiplicados por 2
//     return ac + valor;
// })

// //[ 50, 80, 2, 8, 22 ]
// // [ 100, 160, 4, 16, 44 ]

// console.log(numerosPares)

// ****************    Filter + Map + Reduce   (ARROW FUNCTION)  ************************

//Retorne a soma do dobro de todos os pares
// filtrar pares
// dobrar os valores
// reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros
.filter(valor =>  valor % 2 === 0)
.map(valor => valor * 2)
.reduce((ac, valor) => ac + valor)

//[ 50, 80, 2, 8, 22 ]
// [ 100, 160, 4, 16, 44 ]

// console.log(numerosPares)

// ***************************************

const a1 = [10,20,30];

let total = 0;

a1.forEach(valor => { 
    total += valor;
})

console.log(total)