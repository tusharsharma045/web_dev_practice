// // let name = john
// // const age = 30
// // var isstudent = true

// // console.log(name)
// // console.log(age)
// // // console.log(isstudent)

// // isstudent = 30
// // isstudent = "raja"
// // console.log(isstudent) 



// // function greet(name) {
// //     return "Hello " + name
// // }

// // console.log(greet("Raja"));
// // console.log(greet("John"));


function greet(a,b,op) {
    return op(a,b)
}
function sum(a, b) {
    // let totalsum = a + b
    return a+b
}


console.log(greet(10, 20, sum))

// // let ans = sum(10, 20)
// // let ans2 = sum(30, 40)

// // console.log(ans);
// // console.log(ans2);


// // loops

// let arr = ["tushar", "vivek", "daksh"]

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }  


// function greet(user) {
//     console.log("Hello " + user.name + "your name is " + user.age)
// }

//     let user = {
//         name: "Raja",
//         age: 30
//     }

// greet(user)


let arr = ["Raja", 30 , {
    name: "john", age: 20,
    cities: ["delhi", "mumbai", "kolkata",{
        country: "India",
        city: "delhi"    }

]
}]

console.log(arr[2].cities[3].country)

function sum (n) {
    let ans = 0
    for (let i = 1; i <= n; i++) {
        ans += i
    }
    return ans
}
console.log(sum(5))


//  promises

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Data fetched successfully"
            resolve(data)
        }, 2000)
    })
}
