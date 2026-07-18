const express = require("express");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { usermodel, todomodel } = require("./db");

const app = express();

app.use(express.json());

const JWT_SECRET = "harkirat";

mongoose
  .connect("mongodb://root:example@localhost:27017/todo?authSource=admin")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// ================= Signup =================

app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await usermodel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    await usermodel.create({
      name,
      email,
      password,
    });

    res.json({
      message: "User created successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// ================= Signin =================

app.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await usermodel.findOne({
      email,
    });

    if (!user) {
      return res.status(403).json({
        message: "User not found",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(403).json({
        message: "Invalid credentials",
      });
    }

    if (!user) {
      return res.status(403).json({
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      {
        id: user._id.toString(),
      },
      JWT_SECRET
    );

    res.json({
      token,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// ================= Auth Middleware =================

function auth(req, res, next) {
  const token = req.headers.token;

  if (!token) {
    return res.status(401).json({
      message: "Token required",
    });
  }

  try {
    const decodedData = jwt.verify(token, JWT_SECRET);

    req.userId = decodedData.id;

    next();
  } catch (err) {
    res.status(403).json({
      message: "Invalid token",
    });
  }
}

// ================= Create Todo =================

app.post("/todo", auth, async (req, res) => {
  try {
    const { title } = req.body;

    await todomodel.create({
      title,
      done: false,
      userId: req.userId,
    });

    res.json({
      message: "Todo created successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// ================= Get Todos =================

app.get("/todos", auth, async (req, res) => {
  try {
    const todos = await todomodel.find({
      userId: req.userId,
    });

    res.json({
      todos,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});