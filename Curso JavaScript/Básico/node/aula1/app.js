/*
const { nome, sobrenome, falanome, falaNome } = require('./mod1');
console.log(nome, sobrenome)
console.log(falaNome())
*/
const path = require('path');
const {Pessoa} = require('./mod1');
const mod1 = require('./mod1');

console.log(Pessoa)

const p1 = new Pessoa('Teste')

console.log(p1)
console.log(mod1)