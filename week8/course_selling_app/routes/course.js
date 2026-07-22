const {Router} = require("express");

const courseRoutes = Router();


courseRoutes.post("/course/purchase ",function(req ,res){
    res.json({
        message : "signin endpoint"
    })
})

courseRoutes.get("/course",function(req ,res){
    res.json({
        message : "signin endpoint"
    })
})

module.exports = {
    courseRoutes : courseRoutes 
}
