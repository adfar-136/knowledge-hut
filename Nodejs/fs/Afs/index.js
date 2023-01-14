const fs = require('fs')
// const data = fs.readFileSync('adfar.txt','utf-8')
// console.log(data)
const data = fs.readFile('adfar.txt','utf-8',(err,data)=>{
    console.log(data)
})

console.log("adfar")
console.log(fs)

