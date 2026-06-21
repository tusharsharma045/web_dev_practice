//innput\output bound = used to read data from other files
// 
//  const fs = require('fs');

// function read(err, data) {
//     if (err) {
//         console.error(err);
//     }
//     else {
//         console.log(data);
//     }
// }
// const content = fs.readFileSync('./a.txt', 'utf-8' ,read);

// console.log(content);





// const content2 = fs.readFile('./b.txt', 'utf-8' , read);
// console.log(content2);

// console.log('done');

// classes


// class rectangle {
//     constructor(length, breadth ,color) {
//         this.width = length
//         this.height = breadth
//         this.color = color
//     }

//     // methods
//     area(){
//         const area = this.width * this.height;
//         return area;

//     }

//     // methods
//     paint(color){
//         console.log('painting rectangle with color', color);
//     }
// }

// const rect = new rectangle(10,20);
// const area = rect.area();
// console.log(area);


// other classes

// date class

// const date = new Date()
// const month = date.getMonth()
// const dtae = date.getDate()

// console.log(month);
// console.log(dtae);


// // map

// const map = new Map()
// const name = map.set("name", "tushar")
// const age = map.set("age", 30)

// console.log(name);
// console.log(age)


// promises = promises sre the type of object which is used to handle asynchronous operations in javascript. it represents a value which may be available now, or in the future, or never.

// function name (){

//    console.log("harkirat")
// }
// setTimeout(name, 3000); 

// name()


// function setTimeout(){
//    return new Promise(resolve => 
//        setTimeout(resolve, 3000));
//    };


// function callback() {
    // console.log("harkirat")


// };

// setTimeout(3000).then(callback);


// function random(resolve){
//     setTimeout(resolve ,3000);

// }

// const p = new promise(random);

// function callback(main) {
//     console.log(promisecallback);

    
// }
// p.then(main);

// create a promisfied verified of version of fs.readfile, fs.writefile, cleanfile
