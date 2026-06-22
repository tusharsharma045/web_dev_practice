// function setTimeoutPromisified(ms) {
//     return new Promise((function(resolve) {
//     setTimeout(resolve, ms)
//     })
//     )}


// function callback(){

//     console.log("3 sec passed")
// }
// promisifiedfunction(3000).then(callback)


// function hell() {
//     console.log(hi);
    
// }

// setTimeout (function () {
//     console.log("hi");
//     setTimeout(function(){
//         console.log("hi sir ")
//         setTimeout(function() {
//             console.log("hello" )
            
//         }, 5000);
//     },3000)
    
// },1000)


// console.log("outside");

// simple proomise
// function setTimeoutPromisified(ms) {
//     return new Promise((function(resolve) {
//     setTimeout(resolve, ms)
//     })

// )};

// // promisified funnction

// setTimeoutPromisified(1000).then(function () {
//     console.log("hi");


//     setTimeoutPromisified(3000).then(function () {
//         console.log("hi sir");



//     setTimeoutPromisified(1000).then(function () {
//     console.log("hi hello");
//         });
//     });
// });



function setTimeoutPromisified(ms) {
    return new Promise((function(resolve) {
    setTimeout(resolve, ms)
    })

)};

async function main() {
    await setTimeoutPromisified(3000);
    console.log("hi daksh")
    await setTimeoutPromisified(5000);
    console.log('hi vivek')
    await setTimeoutPromisified(1000);
    console.log("hiii")

}


main()