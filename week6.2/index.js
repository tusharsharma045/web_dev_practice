const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

const JWT_SECRET = "HARKIRATSINGHBASSI";

const users = [];

function logger(req,res,next){
    console.log("req.method + request came")
    next();
}

app.get("/",function(req , res){
    res.sendFile(__dirname+"/frontend/index.html")
});
app.get("/signup",function(req , res){
    res.sendFile(__dirname+"/frontend/signup.html")
}); 


app.post("/signup",logger, (req, res) => {
    const { username, password } = req.body;

    users.push({
        username,
        password
    });

    res.json({
        message: "User signed up successfully"
    });
});

app.post("/signin",logger, (req, res) => {
    const { username, password } = req.body;

    let foundUser = null;

    for (let i = 0; i < users.length; i++) {
        if (
            users[i].username === username &&
            users[i].password === password
        ) {
            foundUser = users[i];
            break;
        }
    }

    if (!foundUser) {
        return res.json({
            message: "Invalid credentials"
        });
    }

    const token = jwt.sign({ username }, JWT_SECRET);

    res.json({
        token
    });
});

function auth(req,res,next){
    
const token = req.header.token
const decodedData = jwt.verify(token , JWT_SECRET)  
    if (decodedData.username) {
        req.username = decodedData.username
        
    
    next()
}

else{
    res.json({
        message: "you  are not logged in"
    })
    
}

    
} 

app.get("/me",auth, (req, res) => {
    

        for (let i = 0; i < users.length; i++) {
            if (users[i].username === req.username) {
                foundUser = users[i];
                break;
            }
        }

        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    });

    app.get("/todo",auth,function (req,res) {
        
    });

    app.post("/todo",auth,function (req,res) {
        
    });

    app.delete("/todo",auth,function (req,res){

    });

app.listen(3000, () => {
    console.log("Server running on port 3000");
});