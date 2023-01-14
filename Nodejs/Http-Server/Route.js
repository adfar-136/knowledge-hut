var http = require('http')
var fs = require('fs')

const server = http.createServer((req,res)=>{
    const data = fs.readFileSync('./UserApi/userapi.json','utf-8')
    const objData = JSON.parse(data)
    if(req.url=="/"){
        res.end("Hello welcome to home page")
    } 
    else if(req.url == "/about"){
        res.end("Hello welcome to About Page")
    }
    else if(req.url == "/contact"){
        res.end("Hello welcome to contact Page")
    }
    else if(req.url == "/userapi"){
        res.end(objData[2].name)
    }
    else {
        res.writeHead(404,{"content-type":"text/html"})
        res.end("<h1>404 error pages</h1>")
    }
})
server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to 8000 poort no ")
})