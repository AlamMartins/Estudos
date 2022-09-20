function meuEscopo(){
    //Acessando o Formulário<form> e Resultado<Div>
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')

    //Criando Array vazio para receber o objeto com os Dados
    const pessoas = [];

    //Criando uma Função para receber os Eventos
    function recebeEventoForm (evento){
    //Evento preventDefault -> Pra não atualizar a página quando for clicado no botão 
        evento.preventDefault();

    //Recuperando o valor de cada campo
     const nome = form.querySelector('.nome');
     const sobrenome = form.querySelector('.sobrenome');
     const peso = form.querySelector('.peso');
     const altura = form.querySelector('.altura');
    
    //Inserindo no Objeto Pessoas todos os Dados Capturados acima.
     pessoas.push({
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value
     });

     //Imprime o Objeto
     console.log(pessoas);

     //Adiciona na DIV 'Resultado' as informações preenchidas.
     resultado.innerHTML += `<p style=" background-color:powderblue; font-weight: bold">${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;

}
//Chamando a Function recebeEventoForm
form.addEventListener('submit', recebeEventoForm);
    
}

meuEscopo();