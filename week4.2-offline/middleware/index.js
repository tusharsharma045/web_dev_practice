const express = require('express');

const app = express();

// you have been given an express server which has a few endpoints.
// your task is to create a global middle ware (app.use) which  will maintainn the count of number of request made to the server and in the global request counnt variable.

// let requestCount = 0;
// app.use(function(req,res,next) {
//     requestCount = requestCount + 1;
//     next();
// });



// create a function that takes a boolean for age
function checkAge(req,res,next) {
    if (age >= 14) {
        next();
    } else {
        res.json({ "message": "you are not old enough to ride this attraction" });
    }
}

app.use(checkAge);

app.get("/ride1",function(req,res) {
    if (checkAge(req.query.age)) {
        if (req.query.age   >= 14) {


   res.json({
    message: "you riden a ride1"
    });
}
    }

    else {
        res.json({ "message": "you are not old enough to ride this attraction" });
    }
      

});


app.listen(3000);