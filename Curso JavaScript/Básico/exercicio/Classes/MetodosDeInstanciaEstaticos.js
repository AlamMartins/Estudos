function teste(){
    console.log(this)
}

class ControleRemoto {
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
        teste();
    }

    //Método de instância
    aumentarVolume(){
        this.volume += 2;
    }
    //Método de instância
    diminuirVolume(){
        this.volume -= 2;
    }

    //Método de estático
    static soma(x,y){
        console.log(this)
    }
}

const controle1 = new ControleRemoto('LG')
// controle1.aumentarVolume()
// controle1.aumentarVolume()
// controle1.aumentarVolume()
// controle1.aumentarVolume()
// console.log(controle1)

// console.log(ControleRemoto.soma(2,4))

ControleRemoto.soma()
