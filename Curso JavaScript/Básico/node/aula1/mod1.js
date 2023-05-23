/*
const nome = 'Alam'
const sobrenome = 'Morais'

const falaNome = () => nome +' '+ sobrenome;


//console.log(module)

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = 'O que eu quiser exportar';

*/

class Pessoa {
    constructor(nome){
        this.nome = nome;
    }
}

const nome = 'Alam';
const sobrenome = 'Morais'

// exports.Pessoa = Pessoa;

module.exports = {
    nome, sobrenome, Pessoa
};

