let promise = new Promise((resolve,reject)=>{
    resolve("Hello Adfar")
})
promise.then(new Promise((resolve,reject)=>{
    resolve("Hi Adfar")
}).then((result1)=>{
    console.log(result1)
})).then((result2)=>{
    console.log(result2)
})
