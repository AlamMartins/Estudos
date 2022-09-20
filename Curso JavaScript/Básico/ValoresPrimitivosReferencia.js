/*
Primitivos (imutáveis) - string, numbero, boolean, underfined, null (bigint, sumbol) - Valores Copiados

Referência (mutável) - array, object, function - passados por referência

*/

const a = {
    nome: 'Alam',
    sobrenome: 'Morais'
    };
        
    const b = {...a}

    b.nome = 'Ailton';
    
    console.log(a);
    console.log(b);


    