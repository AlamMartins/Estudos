
//Replicando o objeto em outra variavel e Realizando Modificação.
// const produto = { nome: 'Produto',preco: 1.8};
// Object.freeze(produto)  --Bloqueia todo objeto, não tem como realizar alterações.
// produto.nome ='Outro nome'
// const caneca = Object.assign({},produto, {material:'Porcenala'});
//const caneca = { nome: produto.nome, preco: produto.preco}
//caneca.nome = 'Outro nome';
//caneca.preco = 2.5;
/*
---- Conteúdos de Objetos

Object.values
Object.entries
Object.getOwnPropertyDescriptor(o, 'prop')
Object.assign(des,any)
...(spread)


        * Já foi estudado *

Object.Keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)

*/
const produto = { nome: 'Produto',preco: 1.8};

//Destructor direto no For (desestruturando um objeto)
// for (let [chave,valor] of Object.entries(produto)){
//     console.log(chave,valor)
// }


//Alterando as propriedades
// Object.defineProperty(produto, 'nome', {
//     writable: false,
//     configurable: false,
//     value: 'Qualquer outra coisa'
// })

// console.log(Object.getOwnPropertyDescriptor(produto,'nome')) //Tras a descrição do objeto









// ****************************************************************************

