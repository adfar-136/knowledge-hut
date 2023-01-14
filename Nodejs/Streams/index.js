const fs =require('fs')
const http = require('http')
const server = http.createServer()
server.on("request",(req,res)=>{
    const rstraem = fs.createReadStream("input.txt")
    rstraem.pipe(res)
    // fs.readFile("input.txt",(err,data)=>{
    //     if(err) return console.log(err);
    //     res.end(data.toString())
    // })
    // rstraem.on("data",(chunkdata)=>{
    //     res.write(chunkdata)
    // })
    // rstraem.on("end",()=>{
    //     res.end()
    // })
    // rstraem.on("error",(err)=>{
    //     console.log(err)
    //     console.log("adfar")
    //     res.end("file not found")
    // })

})
server.listen(5003,'127.0.0.1')