const fs = require('fs')
 let data = 'I am new to Node js'
 let writeStream = fs.createWriteStream('output.txt')
 writeStream.write(data,'utf-8')
 writeStream.end()
 writeStream.on('finish', function(){
    console.log("writing completed")
 })