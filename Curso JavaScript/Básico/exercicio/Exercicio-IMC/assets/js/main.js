//Capturar o evento de subtmit do formulário
const form = document.querySelector('#formulario');

//------------Função pra capturar o evento do botão----------------/
form.addEventListener('submit', function(e){
    e.preventDefault();

    //Capturando os Valores dos INPUTS
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    
    //Pegando o valor do Campo e convertendo para Number
    const peso =  Number(inputPeso.value);
    const altura =  Number(inputAltura.value);

    //Validando se o campo não atender, exibir a mensagem.
    if(!peso){
        setResultado('Peso Inválido.', false);
        return;

    }
    if(!altura){
        setResultado('Altura Inválido.', false);
        return;
    }

const imc = getImc(peso, altura);
const nivelImc = getNivelImc(imc);

const msg = `SEU IMC é ${imc} (${nivelImc}).`;

setResultado(msg, true);
// console.log(imc, nivelImc);

});

//------------ FIM - Função pra capturar o evento do botão------------------------------/

// -------------- START - Função Definição Nível e Dados IMC --------------------------/
function getNivelImc (imc){

    const nivel = ['Abaixo do Peso','Peso Normal','Sorepeso',
    'Obesidade Grau 1','Obesidade Grau 2','Obesidade Grau 3'];

    if(imc >= 39.9) return nivel[5];
    if(imc >= 34.9) return nivel[4];
    if(imc >= 29.9) return nivel[3];
    if(imc >= 24.9) return nivel[2];
    if(imc < 18.5) return nivel[1];
    }    
// -------------- FIM - Função Definição Nível e Dados IMC --------------------------/


//---------------- START - Função que cria o cálculo do IMC ------------------------/
function getImc (peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}
//---------------- FIM - Função que cria o cálculo do IMC -------------------------/

//----------------- START Função para Criar Paragráfo ----------------------------/
function criaP(className){
    const p = document.createElement('p'); //Criando o Paragráfo
    // p.classList.add('paragrafo-resultado') //Criando Paragráfo com uma class = paragráfo-resultado
    return p;
    
}
//----------------- FIM Função para Criar Paragráfo -----------------------------/

//-----------------START FUNÇÃO  para manipular a div=resultado -----------------/
function setResultado (msg,isValid) {
    const resultado = document.querySelector('#resultado');
    // resultado.innerHTML = `<p>${msg}</p>`;
    resultado.innerHTML = ''; //deixando o valor padrão zerado
    
    const p = criaP();
//Cria o paragráfo com a cor de fundo vermelho ou verde conforme a condição
if(isValid) {
    p.classList.add('paragrafo-resultado');
}else {
    p.classList.add('bad');
}

    p.innerHTML = msg;
    resultado.appendChild(p)
}
//----------------- FIM FUNÇÃO  para manipular a div=resultado -----------------/

