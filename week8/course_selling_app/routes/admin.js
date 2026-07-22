const {Router} = require("express");

const adminRoutes = Router();

const { adminModel } = require ("../db")


adminRoutes.post("/admin/login",function(req , res){
    res.json({
        message : "admin login endpoint"
    })
})

adminRoutes.post("/user/signin",function(req ,res){
    res.json({
        message : "signin endpoint"
    })
})

module.exports = {
    adminRoutes : adminRoutes
}