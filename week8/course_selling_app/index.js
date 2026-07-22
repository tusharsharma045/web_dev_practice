const express = require("express");
require("./db");
const app = express();
const {userrouter} = require("./routes/user.js");
const {courseRoutes} = require("./routes/course.js");
const {adminRoutes} = require("./routes/admin.js");
const admin = require("./routes/admin.js");

app.use(express.json());

app.use("/routes/user",userrouter);
app.use("/routes/course",courseRoutes);
app.use("/routes/admin",adminRoutes)


app.listen(3000);
