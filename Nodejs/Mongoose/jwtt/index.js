var express = require("express")
var jwt = require("jsonwebtoken")
var app = express()
var secret_key= "123@123"
function verifytoken(req,res,next){
    var token = req.headers.authorization;
    if(!(token === "undefined")){
       req.token = token;
       next()
    }
    else{
        res.json({
            status : "failure",
            message :" Token is not received, please send the token"
        })
    }
}
app.post("/login",(req,res)=>{
    var user = {
        username : "Adfar",
        password : "adfar@123"
    };
    jwt.sign(user,secret_key,(err, token)=>{
        if(err){
            console.log(err)
            res.json({
                status : "false",
                message : "token failed to generate",
            })
        }else{
            res.send({
                status : "success",
                token,
                message : "token generated"
            })
        }
    })
})
app.post("/profile",verifytoken,(req,res)=>{
    jwt.verify(req.token,secret_key,(err, tokendetails)=>{
        if(err){
            res.json({
                status : "false",
                msg:"Invalid Token"
            })
        }else {
            res.json({
                status : "success",
                details : tokendetails
            })
        }
    })
})
app.listen(6001,()=>{
    console.log("listening to port 6001")
})