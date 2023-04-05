let array = [1,2,3,4,5,6,7,8,9,7,4,56,21,5,4,55,4,58,4]


const chunkSize = 5;

for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    console.log(chunk)
    // do whatever
}

