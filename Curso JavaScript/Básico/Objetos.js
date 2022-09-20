// *************************** OBJETO ***************************
const pessoa1 = {
nome: 'Alam',
sobrenome: 'Martins',
idade: 30
};

const pessoa2 = {
    nome: 'Nathália',
    sobrenome: 'Reis',
    idade: 28
    };

// console.log(`Boa noite `+pessoa1.nome)
// console.log(pessoa1.sobrenome)

// *************************** CRIANDO UM OBJETO ATRAVÉS DE UMA FUNÇÃO  ***************************

function criaPessoa (nome, sobrenome, idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa = criaPessoa('Alam','Martins',30)
// console.log(pessoa)

// *************************** CRIANDO UM OBJETO ATRAVÉS DE UMA VARIÁVEL  ***************************

const pessoa3 = {
    nome: 'Alam',
    sobrenome: 'Martins',
    idade: 30,

    fala(){
        // console.log(`${this.nome} ${this.sobrenome} está falando oi`);
         console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade(){
        this.idade++;
    }
};

pessoa3.fala();

pessoa3.incrementaIdade();
pessoa3.fala();

pessoa3.incrementaIdade();
pessoa3.fala();

