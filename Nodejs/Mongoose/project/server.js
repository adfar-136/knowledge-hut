const express = require('express')
const app = express()
const expressSession = require('express-session')
const passport = require('passport')
const ejs =require('ejs')
const {connectMongoose,User} = require('./database')
const bodyParser = require("body-parser")
const { initializingPassport,isAuthenticated } = require('./passportconfig')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
initializingPassport(passport)
connectMongoose()
app.use(expressSession({
    secret : "secret",
    resave : false,
    saveUninitialized : false
}))
app.use(passport.initialize())
app.use(passport.session())
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
   console.log(newUser)
   res.status(200).send(newUser)
})
app.get("/profile",isAuthenticated,(req,res)=>{
    res.send(req.user)
})
app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/register', 
  successRedirect:"/profile" }),
  );
  app.get('/logout',(req,res)=>{
    req.logOut(()=>{
        
    });
    res.send("logged out successfully")
  })
app.listen(3000,()=>{
    console.log("listening to port 3000")
})
