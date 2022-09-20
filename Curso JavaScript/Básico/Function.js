// *********************** PARÂMETROS *********************************
/*
function saudacao(nome){
return `Bom dia ${nome} !`;
}

const variavel = saudacao('Alam');
console.log(variavel); */

// *********************** PARÂMETROS E CALCULANDO VALORES*********************************

// function soma(x=1,y=1) {

//     const resultado = x + y;
//     return resultado;

// }

// const resultado = soma(5,5);
// console.log(resultado)


// *********************** FUNÇÃO ANÔNIMA *********************************

// const raiz = function(n) {
//     return n ** 0.5;

// };
// console.log(raiz(9))
// console.log(raiz(16))
// console.log(raiz(25))

// *********************** ARROW FUNCTION *********************************

// const raiz2 = (n) => {
// return n ** 0.5;
// };


const raiz2 = n =>  n ** 0.5;
    

console.log(raiz2(9))
console.log(raiz2(16))
console.log(raiz2(25))