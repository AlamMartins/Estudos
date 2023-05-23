function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
return new Promise((resolve, reject) =>{
    if(typeof msg !== 'string') reject(new Error("ERRO, EXISTE ALGUM DADO NUMBER"));

    setTimeout(() => {
        resolve(msg.toUpperCase() + ' - Passei na promise');
    },tempo);
});
}

const promises = [
    'primeiro valor',
    esperaAi('Promise 1',3000),
    esperaAi('Promise 2',50000),
    esperaAi('Promise 3',1000),
    'Outro Valor'
];

Promise.all(promises)
.then(function(valor){
    console.log(valor);
})
.catch(function(erro){
    console.log(erro);
})