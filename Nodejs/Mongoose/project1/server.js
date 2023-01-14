const express = require('express')
const app = express()
const ejs =require('ejs')
const {connectMongoose,User} = require('./database')
connectMongoose()
app.use(express.json())
app.set("view engine","ejs")
app.get('/',(req,res)=>{
    res.render("index")
})
app.get("/register",(req,res)=>{
    res.render("register")
})
app.get("/login",(req,res)=>{
  res.render("login")
})
app.post('/register',async (req,res)=>{
   const user = await User.findOne({username : req.body.username})
   if(user) return res.status(400).send("user already exists")
   const newUser = await User.create(req.body)
   res.status(200).send(newUser)
})
app.listen(3000,()=>{
    console.log("listening to port 3000")
})
