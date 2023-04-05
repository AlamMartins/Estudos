class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){ 
            console.log(this.nome + ' já ligado.')
            return
        }
        this.ligado = true;
    }

    desligar(){
        if(!this.ligado){ 
            console.log(this.nome + ' já desligado.')
            return
        }
        this.ligado = false;
    }
}

// const d1 = new DispositivoEletronico('Smartphone')

class Smartphone extends DispositivoEletronico{
    constructor(nome,cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;

    }
}

class Tablet extends DispositivoEletronico{
    constructor(nome, temWifi){
        super(nome);
        this.temWifi = temWifi;
    }

    ligar(){
        console.log('Olha, você alterou o método ligar.')
    }

    falarOi(){
        console.log('Oi')
    }
}



const s1 = new Smartphone('Iphone','preto','XS')
console.log(s1)

const t1 = new Tablet('Ipad', true)
// console.log(t1)
t1.ligar()
t1.falarOi()