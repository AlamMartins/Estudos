const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 11, 22, 27]

//Criando uma função com condição para validar com método Filter
function callbackFilter(valor, indice, array){
        if (valor > 10){
                return true;
            }else{
                   return false; 
                }
            
            }
            
            
            // Criando uma função com a validação direta
            // -------------------------------------------------------
            
            function callbackFilter(valor, indice, array){
                       return valor > 10;
                    }
                
                    //-------------------------------------------------------
                    
//utilizando arrow function 
 const numerosFiltrados = numeros.filter((valor, indice, array ) => {
     console.log('Valor:'+ valor+'| indice: '+indice+' Array Completo:'+array);
     return valor > 10;
 });

 console.log(numeros)


//-------------------------------------------------------
 
const pessoas =  [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const pessoascomNomeGrande = pessoas.filter(function(obj){
// console.log(valor.nome)
return obj.nome.length >= 5;
});

//Filter com Arrow Function
const pessoascomNomeGrande2 = pessoas.filter(obj => obj.nome.length >= 7);

const pessoasMais50Anos = pessoas.filter(obj => obj.idade >= 50);
    
const nomeTerminaComA = pessoas.filter(function(obj){
    return obj.nome.toLowerCase().endsWith('a')
});

console.log(nomeTerminaComA)