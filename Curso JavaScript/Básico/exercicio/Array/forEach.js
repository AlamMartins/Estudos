


//ARAY 1
var pessoas =  [
    {nome: 'Luiz', idade: 91},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];


//ARAY 2
var pessoas2 =  [
    {nome: 'Luiz', idade: 91},
    {nome: 'João', idade: 23},
    {nome: 'Eduarda', idade: 55},
    {nome: 'Mario', idade: 19},
    {nome: 'Rose', idade: 32},
    {nome: 'Wesley', idade: 47},
];



//Criado um array vazio
var arrayFinal = [];
     
//Criado uma Function para Comparar os 2 valores
    function comparar(pessoas,pessoas2){
    
//utilizando o ForEach para comparar os 2 Arrays > forEach no primeiro Array + forEach no segundo array + comparando os elementos de cada for Each.
    pessoas.forEach(function(e1){
        pessoas2.forEach(function(e2){
            
            if(e1.nome === e2.nome){
                
                //Atribuido ao Array Vazio o resultado Final
                arrayFinal.push(e1)
            
            }

            
        })
        
    })

    engine.debug(JSON.stringify(arrayFinal))    
    
    }
    
    
    
     comparar(pessoas,pessoas2)
     
     
     
     
     
 
 
 
