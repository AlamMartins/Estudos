// Construtora -> molde (classe)

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => 'Original - '+this.nome + ' ' +  this.sobrenome;

}

Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' +  this.sobrenome;
}


const pessoa1 = new Pessoa ('Alam', 'Martins') // <- Pessoa = Função Construtora
const data = new Date() // <- Date = Função Construtora

// console.dir(pessoa1)
// console.dir(data)

//Testes Realizado no Navagador
// ------------------------------------------------------------------------------------

// _____ Manipulando Prototypes ______

function Produto (nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
}

const p1 = new Produto('Camiseta', 50)

//literal
const p2 = {
    nome: 'Caneca',
    preco: 15
};

//setando o Prototype do Produto no P2.
Object.setPrototypeOf(p2, Produto.prototype)

p2.aumento(10)

//Cria um objeto e já define o prototype do Objeto
const p3= Object.create(Produto.prototype,{
    preco:  {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99
    },
    tamanho2: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    }
})


p3.aumento(10)

console.log(p3)