// const express = require('express');

// const app = express();
// function sum(n) {
//     let ans = 0;
//     for (let i = 1; i <=n; i++) {
//     ans = ans  + i;        
//     }
//     return ans;
    
// }

// app.get("/",function (req, res) {
     
//     const n = req.query.n;
//     const ans = sum(n);

//     res.send("hi there" + ans); 
    
// })

// app.listen(3000);


// const express = require('express');

// const app = express();

// const user = [{
//     name : "John",
//     kidney : [{
//         healthy : false
//     }]
// }];

// app.use(express.json());

// app.get("/",function(req,res){


// const johnkidneys = user[0].kidney;
// // console.log(johnkidneys);
// const noofKidneys = johnkidneys.length;
// let noofhealthyKidneys = 0;
// for (let i = 0; i < johnkidneys.length; i++) {
// if (johnkidneys[i].healthy ){
//     noofhealthyKidneys = noofhealthyKidneys + 1;
// }
// }
// noofunnhealthyKidneys = noofKidneys - noofhealthyKidneys;
// res.json({
//     total: noofKidneys,
//     healthy: noofhealthyKidneys,
//     unhealthy: noofunnhealthyKidneys
// });
// });


// app.post("/",function(req,res) {

//     const ishealthy = req.body.ishealthy
//     user[0].kidney.push({healthy: ishealthy})
//     res.json({message: "Kidney added successfully"});
// })

// app.put("/",function(req,res) {
//     for (let i = 0; i < user[0].kidney.length; i++) {
//         user[0].kidney[i].healthy = true;
//     }
//     res.json({});
// });

// //  removing all unhealthy kidneys from the user object and returning a success message in JSON format
// app.delete("/",function(req,res) {
//     const newkidneys = [];
//     for (let i = 0; i < user[0].kidney.length; i++) {
//         if (user[0].kidney[i].healthy) {
//             newkidneys.push({healthy: true})
//         }
//     }
//     user[0].kidney = newkidneys;
//     res.json({message: "Unhealthy kidneys removed successfully"});
// });

// app.listen(3005);


// assignment 1: 

const express = require('express');

const fs = require('fs');

const app = express();
 const path = require('path');
app.get("/files",function(req,res){
    const name = req.params.filename;
    console.log(name);
    fs.readFile(name, 'utf-8', function(err, data) {
        res.json({
             data
        });
    });
}
);

app.listen(3000);