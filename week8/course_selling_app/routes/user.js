const {Router} = require("express");

const userrouter = Router();

userrouter.post("/user/signup",function(req , res){
    res.json({
        message : "signup endpoint"
    })
})

userrouter.post("/user/signin",function(req ,res){
    res.json({
        message : "signin endpoint"
    })
})

userrouter.post("/user/purchase ",function(req ,res){
    res.json({
        message : "signin endpoint"
    })
})

module.exports = {
    userrouter : userrouter}
