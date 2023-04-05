/*
function map(f,a) {
  var result = []; // Cria um novo Array
  var i;
  for (i = 0; i != a.length; i++)
    result[i] = f(a[i]);
    console.log(result)
  return result;
}


map(function(x) {return x * x * x}, [0, 1, 2, 5, 10]);

*/



console.log(square(5));



var square = function (n) {
    return n * n;
}

