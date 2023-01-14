const { dir } = require('console')
var path = require('path')
// console.log(path.dirname('C:/Users/LEGION/Desktop/Chrome-OS/Nodejs/path/index.js'))
// console.log(path.extname('C:/Users/LEGION/Desktop/Nodejs/path/index.js'))
// console.log(path.basename('C:/Users/LEGION/Desktop/Chrome-OS/Nodejs/path/index.js'))
const mypath= path.parse('C:/Users/LEGION/Chrome-OS/Nodejs/path/adfar.js')
console.log(mypath)

const adfar = path.format({
    root:'/',
    name:'aedfar',
    ext:'.js'

})
console.log(adfar)

