const fs = require('fs')
fs.writeFileSync('adfar.txt','Learning backend')
fs.appendFileSync('adfar.txt',' And really looking forward to it')
const our_data = fs.readFileSync('adfar.txt')
const string_data = our_data.toString()
console.log(string_data)
fs.renameSync("adfar.txt","adfar1.txt")




fs.rmdirSync('adfar')





