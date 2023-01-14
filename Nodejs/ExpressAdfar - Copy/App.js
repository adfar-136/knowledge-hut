const express = require('express')
var app = express()
var hbs =require('ejs')
const port = 5000;
//express.static(root,[options])
const path = require('path')
const staticPath = path.join(__dirname,"../public")
// app.set("view engine","ejs")
// app.use(path,express.static(root,[options]))
app.use("/",express.static(staticPath))
// app.get("/",(req,res)=>{
//     var data = {
//         name:"Adfar",
//         hobbies : ['playing-footbal',"dancing","coding","cycling"]
//     }
//     res.render("home",{data:data})
// })
// app.get("/projects",(req,res)=>{
    
//         res.render("projects",{project:project})
// })
app.listen(port)
