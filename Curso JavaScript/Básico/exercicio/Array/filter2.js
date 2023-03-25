

let arr1 = [1, 2, 3, 6 , 10];
let arr2 = [2, 3, 4, 7, 10];


let arr3 = arr1.filter(value => arr2.includes(value));
console.log(arr3);