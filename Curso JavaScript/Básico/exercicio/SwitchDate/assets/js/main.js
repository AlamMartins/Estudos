// //Capturar o evento de subtmit do formulário
// const h1 = document.querySelector('.container h1');
// const data = new Date();
// // h1.innerHTML= data.toString();

// function getDiaSemanaTexto(diaSemana){
// let diaSemanaTexo;

//     switch (diaSemana) {
//     case 0 : diaSemanaTexo = 'Domingo'; return diaSemanaTexo;
//     case 1 : diaSemanaTexo = 'Segunda-Feira'; return diaSemanaTexo;
//     case 2 : diaSemanaTexo = 'Terça-Feira';   return diaSemanaTexo;
//     case 3 : diaSemanaTexo = 'Quarta-Feira';  return diaSemanaTexo;
//     case 4 : diaSemanaTexo = 'Quinta-Feira';  return diaSemanaTexo;
//     case 5 : diaSemanaTexo = 'Sexta-Feira';   return diaSemanaTexo;
//     case 6 : diaSemanaTexo = 'Sábado-Feira';  return diaSemanaTexo;
    
// }
// }

// function getNomeMes(numeroMes){
//     let nomeMes;
    
//         switch (numeroMes) {
//         case 0 : nomeMes = 'Janeiro'; return nomeMes;
//         case 1 : nomeMes = 'Fevereiro'; return nomeMes;
//         case 2 : nomeMes = 'Março'; return nomeMes;
//         case 3 : nomeMes = 'Abril'; return nomeMes;
//         case 4 : nomeMes = 'Maio'; return nomeMes;
//         case 5 : nomeMes = 'Junho'; return nomeMes;
//         case 6 : nomeMes = 'Julho'; return nomeMes;
//         case 7 : nomeMes = 'Agosto'; return nomeMes;
//         case 8 : nomeMes = 'Setembro'; return nomeMes;
//         case 9 : nomeMes = 'Outubro'; return nomeMes;
//         case 10 : nomeMes = 'Novembro'; return nomeMes;
//         case 11 : nomeMes = 'Dezembro'; return nomeMes;
        
//     }
// }

// function zeroAEsquerda(num){
//     return num >= 10 ? num : `0${num}`;
// }

// const a = data.getMilliseconds
// console.log(a);

// function criaData(data){
//     const diaSemana = data.getDay();
//     const numeroMes = data.getMonth();

//     const nomeDia = getDiaSemanaTexto(diaSemana);
//     const nomeMes = getNomeMes(numeroMes);

//     return (`${nomeDia}, ${data.getDate()} de ${nomeMes}` +
//     ` de ${data.getFullYear()} ` +
//     `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())} ${data.getSeconds()}`
//     );
// }

// h1.innerHTML = criaData(data);

//  const h1 = document.querySelector('.container A');
//  const h2 = document.querySelector('.container h2');

//  const data = new Date();
//  const event = new Date('2021-02-07 19:00:00');
//  const diferenca = data - event;

//  h1.innerHTML = `Nós conhecemos no: `+ event.toLocaleString('pt-BR', {
//     dateStyle: 'full'
// });




// console.log(``+event.toLocaleString('pt-BR', { dateStyle: 'long', timeStyle: 'long', timeZone: 'UTC' }));


// console.log(diferenca);


const ficando = document.getElementById('dataFicando');
const namorando = document.getElementById('dataNamorando');
const difNamorando = document.getElementById('difFicandoNamorando');
const difFicando = document.getElementById('difFicando');

const data = new Date();
const dataInicio = new Date('2021-02-07 19:00:00');
const dataInicioNamoro = new Date('2021-04-21 19:00:00');
const diferencaFicando = data - dataInicio;
const diferencaDataNamoro = data - dataInicioNamoro;

function showTime(){
    let time = new Date();
    let horas = tiem.gethours();
    let minutos = time.getMinutes();
    let segundos = time.getSeconds();

    if(horas<10) horas = "0"+horas;
    if(minutos<10) minutos = "0"+minutos;
    if(segundos<10) segundos = "0"+segundos;

    let tempo = horas+":"+minutos+":"+segundos;

    document.getElementById('difFicandoNamorando').innerHTML = tempo;
}

function initTime(){
    setInterval(showTime,1000);
}

ficando.innerHTML = `O Primeiro Encontro foi no `+ dataInicio.toLocaleString('pt-BR', {
         dateStyle: 'full'
     });

namorando.innerHTML = `Começamos namorar na `+ dataInicioNamoro.toLocaleString('pt-BR', {
        dateStyle: 'full'
    });

difFicando.innerHTML = `tempo do primeiro encontro:`;
difNamorando.innerHTML = `tempo namorando:` ;

