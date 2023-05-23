//Symbol
const _velocidade = Symbol('velocidade');

class Carro {
        constructor(nome){
            this.nome = nome;
            this[_velocidade] = 0;
        }

        //Setando Valor
        set velocidade(valor){
            console.log('SETTER')
            if(typeof valor !== 'number') return;
            if(valor >= 100 || valor <= 0) return;
            this[_velocidade] = valor;
        }

        //getter
        get velocidade(){
            console.log('GETTER')
            return this[_velocidade]
        }

        acelerar(){
            if(this[_velocidade] >= 100) return;
            this[_velocidade]++;
        }

        freiar(){
            if(this[_velocidade] <= 0) return;
            this[_velocidade]--;
        }

}

const c1 = new Carro('Fusca')

// for(let i = 0; i <= 200; i++){
//     c1.acelerar();
// }

// c1.velocidade = 98;

c1.velocidade = 99
console.log(c1.velocidade)


//-----------------------------------------------




class Pessoa {
    constructor(nome,sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

   get nomeCompleto() {
        return this.nome +' '+this.sobrenome
    }

    set nomeCompleto(valor){
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome =  valor.join(' ');
    }
}

const p1 = new Pessoa('Alam','Martins') 
p1.nomeCompleto = 'Alam Martins Morais'//SETTER

console.log(p1.nome) //GETTER
console.log(p1.sobrenome) //GETTER
