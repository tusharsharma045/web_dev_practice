const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

const JWT_SECRET = "HARKIRATSINGHBASSI";

const users = [];

app.post("/signup", (req, res) => {
    const { username, password } = req.body;

    users.push({
        username,
        password
    });

    res.json({
        message: "User signed up successfully"
    });
});

app.post("/signin", (req, res) => {
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

app.get("/me", (req, res) => {
    const token = req.headers.token;

    try {
        const decodedData = jwt.verify(token, JWT_SECRET);

        let foundUser = null;

        for (let i = 0; i < users.length; i++) {
            if (users[i].username === decodedData.username) {
                foundUser = users[i];
                break;
            }
        }

        if (!foundUser) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.json(foundUser);
    } catch (err) {
        res.status(401).json({
            message: "Invalid token"
        });
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});