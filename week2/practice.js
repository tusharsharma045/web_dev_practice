// 5 proises problem


// resolvee promise
// const promise1 = new Promise((resolve,reject) => {
//     setTimeout (()=>resolve ("hello world"), 3000);

// })

// promise1.then(console.log);

// promise rejection 
// const promise = new Promise((resolve, reject) => {
//   reject("Something went wrong");
// });

// promise
//   .then(data => console.log(data))
//   .catch(err => console.log(err));


// // even number 
// function isEven(num){
//     return new Promise((resolve, reject) => {
//         if  num  % 2 === 0) {
//             resolve("even");
//         } else {
//             reject("odd");
//         }
//     });
// }


// promise
//   .then(data => console.log(data))
//   .catch(err => console.log(err));



// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise resolved ");
//     }, 2000);
// });

// myPromise
// .then(data => console.log(data))


const yourPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise rejected");
    }, 2000);
});

yourPromise
    .then(data => console.log(data))
    .catch(err => console.log(err));
