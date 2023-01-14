const express =  require('express')
const app = express()
app.use(express.json())

app.get('/',(req,res)=>{
    return res.json("Hello World")
})

app.post('/add',(req,res)=>{
    const {num1,num2} = req.body;
    if(typeof num1 === "string" || typeof num2 === "string"){{
        return res.json({
            status : "error",
            message :"Invalid Data Types"
        })
    }}
    const result= num1 + num2;
    if(num1 > 1000000 || num2 > 1000000 || result > 1000000){
        return res.json({
            status : "error",
            message : "Overflow"
        })
    }
    return res.json({
        status :" Success",
        message : "the addition of two numbers is",
        sum :result
    })
})
app.post('/sub',(req,res)=>{
    const {num1,num2} = req.body;
    if(typeof num1 === "string" || typeof num2 === "string"){{
        return res.json({
            status : "error",
            message :"Invalid Data Types"
        })
    }}
    const sub= num1 - num2;
    if(sub < -1000000){
        return res.json({
            status : "error",
            message : "underflow"
        })
    }
    return res.json({
        status :" Success",
        message : "the subtraction of two numbers is",
        difference :sub
    })
})
app.post('/mul',(req,res)=>{
    const {num1,num2} = req.body;
    if(typeof num1 === "string" || typeof num2 === "string"){{
        return res.json({
            status : "error",
            message :"Invalid Data Types"
        })
    }}
    const mult= num1 * num2;
    if(mult >1000000){
        return res.json({
            status : "error",
            message : "underflow"
        })
    }
    return res.json({
        status :" Success",
        message : "the product of two numbers is",
        product :mult
    })
})
app.post('/div',(req,res)=>{
    const {num1,num2} = req.body;
    if(typeof num1 === "string" || typeof num2 === "string"){{
        return res.json({
            status : "error",
            message :"Invalid Data Types"
        })
    }}
    const div= num1/num2;
    if(div >1000000){
        return res.json({
            status : "error",
            message : "underflow"
        })
    }
    return res.json({
        status :" Success",
        message : "the division of two numbers is",
        division :div
    })
})
app.listen(5000)