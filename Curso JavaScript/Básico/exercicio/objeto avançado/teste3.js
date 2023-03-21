//defineProperty - defineProperties
function Produto (nome, preco, estoque){
     this.nome = nome;
     this.preco = preco;


// ----------------------- OBJECT defineProperty  ----------------------- 

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //Mostra a Chave
        value: estoque, //Valor da Chave
        writable: false, //Pode alterar ou não o valor.
        configurable: true // configurável
    });


    // ----------------------- End ----------------------- 

// ----------------------- OBJECT defineProperties ----------------------- 
    // Object.defineProperties(this, {
    //     nome: {
    //         enumerable: true, //Mostra a Chave
    //         value: nome, //Valor da Chave
    //         writable: true, //Pode alterar ou não o valor.
    //         configurable: true // configurável
    //     },
    //     preco: {
    //         enumerable: true, //Mostra a Chave
    //         value: preco, //Valor da Chave
    //         writable: true, //Pode alterar ou não o valor.
    //         configurable: true // configurável
    //     },
    // })

    // ----------------------- End ----------------------- 

    // Object.defineProperty(this, 'estoque', {
    //     enumerable: true, //Mostra a Chave
    //     value: estoque, //Valor da Chave
    //     writable: true, //Pode alterar ou não o valor.
    //     configurable: false // configurável
    // });
}

const p1 = new Produto('Camiseta', 20, 3)
// p1.estoque = 50000000;
//delete p1.estoque;
// console.log(p1.estoque)
// console.log(Object.keys(p1))
console.log(p1)

for(let chave in p1){
    console.log(chave)
}