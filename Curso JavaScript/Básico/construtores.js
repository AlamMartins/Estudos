/*
function createNewPerson(name) {

  var obj = {};
  obj.name = name;
  obj.greeting = function() {
    console.log('Hi! I\'m ' + obj.name + '.');
  };

  return obj;
}


var salva = createNewPerson('teste');
salva.name;
salva.greeting()

console.log(salva.greeting)
*/
// ORIENTAÇÃO OBJETO - CONSTRUTORES
/*

function Person(name) {

  this.name = name;

  this.cumprimentar = function() {
    console.log('Olá meu nome é ' + this.name + '.');
  };

}

var person1 = new Person('Bob');
var person2 = new Person('Sarah');


person1.name
person1.cumprimentar()

person2.name
person2.cumprimentar()
*/


/*
- EXEMPLO DE CONSTRUTOR UM POUCO MAIS COMPLEXO
*/

/*
function Person(first, last, age, gender, interests) {

    this.name = {
      'first': first,
      'last' : last
    };

    this.age = age;
    this.gender = gender;
    this.interests = interests;

    this.bio = function() {
      console.log(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    };

    this.greeting = function() {
      console.log('Hi! I\'m ' + this.name.first + '.');
    };

  }

  var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

person1['age']
person1.interests[1]
person1.bio()
*/

/*
-------------------------------------------------------------
*/

//Criando um novo objeto vacio através da instância New 
var person1 = new Object();
//Atribuindo Valores para o novo objeto
person1.name = 'Alam';
person1['age'] = 31;
person1.greeting = function() {
    console.log('Oi, meu nome é ' + this.name + ' e eu tenho '+ this.age +' anos.');
};



//Utilizando o método literal de objeto para criar
// var person2 = new Object({
//     name: 'Chris',
//     age: 38,
//     greeting: function() {
//       console.log('Hi! I\'m ' + this.name + '.');
//     }
//   });


//METODO CREATE  
var person2 = Object.create(person1);

person2.name
person2.greeting()

 console.log(person1.valueOf())