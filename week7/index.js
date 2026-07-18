const express = require('express');
const { usermodel, todomodel } = require("./db.js");
const app = express();
//  monngoose.connect("");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "harkirat";

app.use(express.json());

app.post("/signup",async ,function(req,res){

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    const hashpassword = await bcrypt.hash(password,10);
    console.log(hashpassword);
    await usermodel.create({
        name : "harkirat",
        Email : "wwefrffgbv@gmail.com",
        password : "hashpassword"
    })
    if (typeof email !== strinng || email.length <5 || !email.includes("@")) {
        res.json({
            message : "innvalid email"
        })
        
    }

    res.json({
        message : "you have logged in"
    })
});

app.post("/signin",async,function(req,res){

    const email = req.body.email;
    const password = req.body.email;

    const user = await usermodel.findone({
        email : email,
        
    })
    if (!user) {
        res.status(403).json({
            message : "user does not exist in db"
        })
        return
        
    }
    const ispasswordvalid = await bcrypt.compare(password,user.password);

    if (ispasswordvalid) {
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

