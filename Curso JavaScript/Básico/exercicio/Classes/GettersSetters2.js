class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto(){
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(valor){
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ')
    }
}


const p1 = new Pessoa('Alam','Morais');
p1.nomeCompleto = 'Alam Martins Morais'
console.log(p1.nome)
console.log(p1.sobrenome)
