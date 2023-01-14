const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/mongoose").then(()=>{
    console.log("Connected to Mongodb Successfully")
}).catch((err)=>{
    console.log(err)
})
const student = new mongoose.Schema({
    name:String,
    workout:Boolean,
    height:Number
})
const Student = new mongoose.model("Student",student)

const adder =async ()=>{
    const ss = await Student.find({height:{$gte:6}})
    console.log(ss)
  
}
adder()


