

function uArray(array) {
    var out = [];
    for (var i=0, len=array.length; i<len; i++)
        if (out.indexOf(array[i]) === -1)
            out.push(array[i]);
    return out;
}


var myArray = ['c', 'b', 'c', 2, 'b'];
var uniqueArray = uArray(myArray);
console.log("Original Array = ",myArray);
console.log("Array with unique values = ",uniqueArray);