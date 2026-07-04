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

function loggermiddleware(req,res,next){
    console.log(`Request URL: ${req.url}`);
    console.log(`Request Method: ${req.method}`);
    console.log(`Request Time: ${new Date()}`); 
    next();
}

app.use(loggermiddleware);

app.use(requestincreaser);// bby using it here after this we have no requirement to write requestincreaser in every .get method  
// app.get("/sum",requestincreaser,realsummhandler);
app.get("/sum",realsummhandler);

app.get("/admin",function (req,res) {
    res.json({
        message : `Total request count is ${requestcount}`
    });
});


app.listen(3000);