const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "harkiratsinghbassi"; 
const app = express();

app.use(express.json());

const users = [];

function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        // use a simple function here
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}



app.post('/signup', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })

    res.json({
        message: 'User created successfully',
        users: users
    });
});


app.post('/signin', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    const userfound = users.find(function(u){

        if (u.username === username && u.password === password){
            return true}

        else{
            return false
        }


        // without using jwt tokens;
        // if (userfound){
        //     const token = generateToken();
        //     userfound.token= token

        //     res.json({
        //         token : token
        //     })
        // }else{
        //     res.status(403).send({
        //         message: "invalid username and password" 
        //     })
        // }
        

        // by using jwt tokens; it is stateless token 
        if (userfound){
            const token = jwt.sign({
                username: username
            }, JWT_SECRET);
           

            res.json({
                token : token
            })
        }else{
            res.status(403).send({
                message: "invalid username and password" 
            })
        }

    })
});


// app.post('/signin', (req, res) => {
//     const { username, password } = req.body;

//     const userfound = users.find(
//         u => u.username === username && u.password === password
//     );

//     if (!userfound) {
//         return res.status(403).json({
//             message: "Invalid username and password"
//         });
//     }

//     const token = generateToken();
//     userfound.token = token;

//     res.json({
//         token
//     });
// });

app.get("/me", (req, res) => {
    const token = req.headers.authorization;
    const decodedinformation = jwt.verify(token, JWT_SECRET);
    const unauthdecodeinfo = jwt.decode(token, JWT_SECRET);
    const username = decodedinformation.username;   

    let username = null;
    for (let i = 0; i < users.length; i++) {
        if (users[i].token === token) {
            founduser = users[i];
            
        }
    }
    if (founduser) {
        res.send({
            username: founduser.username,
            password: founduser.password
        })
    } else {
        res.status(401).send({
            message: "Unauthorized"
        })
    }
})


app.listen(3000);