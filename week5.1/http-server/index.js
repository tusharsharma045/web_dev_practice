const express = require('express');

const app = express();
let requestcount = 0;

function requestincreaser(req,res,next){
    requestcount += 1;
    console.log(`Request count: ${requestcount}`);
    next();
}

function realsummhandler(req,res){
    const a = parseInt(req.query.firstarg)
    const b = parseInt(req.query.secondarg)
    res.json({
        answer : a+b
    });
};
// app.get("/sum",function (req, res) {
// requestincreaser();
//     const a = req.query.a
//     const b = req.query.b

//     res.json({
//         answer : a+b

//     });
    
// });
app.get("/sum",requestincreaser,realsummhandler);
// this is not neceessary to use the app.get which is written below because we written this syntax onn the realsumhandler above
app.get("/sum",function (req, res) {
    // requestincreaser(); // use the function on both places in .get and out of .get
    const a = parseInt(req.query.firstarg)
    const b = parseInt(req.query.secondarg)

    res.json({
        answer : a+b

    });
});


// app.get("multiply",function (req,res) {
    
// });


app.listen(3000);