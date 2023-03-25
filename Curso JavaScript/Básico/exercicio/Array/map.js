

const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 11, 22, 27];

//Map com Arrow Function
const numerosEmDobro = numeros.map(valor => valor * 2);

// console.log(numerosEmDobro)


//---------------------------------------------------------------------

const pessoas =  [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

//SELECIONANDO APENAS OS NOMES COM MAP
const todosNomes = pessoas.map(function(obj){
    // return valor.nome
    // console.log(obj.nome)
})


//SELECIONANDO APENAS OS NOMES COM MAP (ARROW FUNCTION)
// const todosNomesAFobj = pessoas.map(obj => console.log(obj.nome));
const todosNomesAFlist = pessoas.map(obj => obj.nome === 'Maria');



  console.log(todosNomesAFlist)

//deletando nomes para exibir somente idade
const idades = pessoas.map(function(obj){ 
    // delete obj.nome
    // return obj
    return {idade: obj.idade};
});

const idades2 = pessoas.map(obj => ({ idade: obj.idade}))

//  console.log(idades2)


//---------------------------------------------------------------------

// const comIds = pessoas.map(function(obj, indice){
//     // obj.id = indice + 1;
//     // return obj;

//     const newObj = {...obj};
//     newObj.id = indice;
//     return newObj;
// });

// console.log(pessoas);
// console.log(comIds);
