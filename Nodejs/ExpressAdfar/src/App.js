const express = require('express')
var app = express()
// var hbs =require('hbs')
const port = 3005;
//express.static(root,[options])
const path = require('path')
const staticPath = path.join(__dirname,"../public")
// app.set("view engine","hbs")
// app.use(path,express.static(root,[options]))
app.use(express.static(staticPath))
// app.get("/",(req,res)=>{
//     var demo = {
//         name:'Adfar',
//         age:26
//     }
//     res.render("demo",{demo:demo})
// })
// app.get("/projects",(req,res)=>{
//     var project = {
//         name : "Adfar",
//         skills : ['HTML',"css","Nodejs"]
//        }
//         res.render("projects",{project:project})
// })
app.listen(port)
