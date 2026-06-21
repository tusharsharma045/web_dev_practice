const fs = require('fs');

function read(err, data) {
    if (err) {
        console.error(err);
    }
    else {
        console.log(data);
    }
}
const content = fs.readFileSync('./a.txt', 'utf-8' ,read);

console.log(content);




const content2 = fs.readFile('./b.txt', 'utf-8' , read);
console.log(content2);

console.log('done');
