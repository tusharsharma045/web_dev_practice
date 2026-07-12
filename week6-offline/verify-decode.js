const jwt =  require("jsonwebtoken");

const value = {
    username: "harkirat",
    password: "harkirat\\\\"
}

const token = jwt.sign(value, "secret");

console.log(token);

const decodedData = jwt.verify(eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhhcmtpcmF0IiwicGFzc3dvcmQiOiJoYXJraXJhdFxcXFwiLCJpYXQiOjE3ODM4NjUwNjd9.tJ662jiD9ZzVxjjSch7eW6hpixMZnJt_bQfs1vpAPTs, "secret");

console.log(decodedData);


