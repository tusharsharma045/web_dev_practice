const express = require('express');
const { usermodel, todomodel } = require("./db.js");
const app = express();
//  monngoose.connect("");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "harkirat";

app.post("/signup",async ,function(req,res){

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    app.use(express.json());

    await usermodel.create({
        name : "harkirat",
        Email : "wwefrffgbv@gmail.com",
        password : "123456"
    })

    res.json({
        message : "you have logged in"
    })
});

app.post("/signin",async,function(req,res){

    const email = req.body.email;
    const password = req.body.email;

    const user = await usermodel.findone({
        email : email,
        password: password
    })

    if (user) {
        console.log({
            id : user._id.toString()
        });
        const token = jwt.sign({
    id : user._id.toString()
        },JWT_SECRET);

        res.json({
            message : token
        });

    }else{
        res.status(403).json({
            message : "invalid Credential"
        })
    }
});

app.post("/todo",auth,function(req,res){
    const userId = req.userId;
    const tittle = req.body.tittle;
    todomodel.create({
        title : tittle,
        userId : userId
    });
    res.json({
        userId : userId
    })

});

app.get("/todos",auth,function(req,res){
    const userId = req.userId;
    const todos = todomodel.find({
        userId : userId
    });

    res.json({
        userId : userId,
        todos : todos
    });

});




function auth(req,res,next){

    const token = req.headers.token;

    const decodeddata = jwt.verify({token,JWT_SECRET})

    if (decodeddata) {
        req.userId = decodeddata.id;
        next();
    }else{
        res.status(403).json({
            message : "invalid credentials"
        });
    }

};


app.listen(3000);

