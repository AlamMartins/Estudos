/*
function criaPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Alam','Morais');

console.log(p1.nomeCompleto)
*/

//-------------------  CONSTRUTOR ---------------------

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    // Object.freeze(this)
}

const p1 = new Pessoa('Alam','Morais');
p1.nome = 'Mala';
p1.sobrenome = 'teste'
p1.fala = function() {console.log('Oi');};
p1.fala();
const p2 = new Pessoa('Nathália','Reis');

console.log(p1)
console.log(p2)
