var vegetais = ['batata', 'tomate', 'pimenta', 'pimentao'];

function atualizarColecaoVegetais (vegetais, vegetal) {

      var vegetal = vegetal.toLowerCase();
      

    if (vegetais.indexOf(vegetal) === -1) {
        vegetais.push(vegetal);
        console.log('Nova coleção de vegetais é : ' + vegetais);

    } else if (vegetais.indexOf(vegetal) > -1) {
        console.log(vegetal + ' já existe na coleção de vegetais.');
    }
    
}


atualizarColecaoVegetais(vegetais, 'espinafre');
// Nova coleção de vegatais é : batata,tomate,pimenta,pimentao,espinafre

atualizarColecaoVegetais(vegetais, 'tomatE');
// espinafre já existe na coleção de vegetais.



