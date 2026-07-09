const express = require('express');
const app = express();
const jwt   = require('jsonwebtoken');

const JWT_SECRET = 'HARKIRATSINGHBASSI'; // Replace
app.use(express.json());    

app.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    res.json({
        message: 'User signed up successfully',
        
    });
});

app.post('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = [i];

});

app.listen(3000);