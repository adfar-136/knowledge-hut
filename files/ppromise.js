var promise = new Promise(function(resolve,reject){
    const x = "Adfar";
    const y = "Adfdffdar";
    if(x==y){
        resolve()
    }
    else{
        reject()
    }
})

promise.then(function(){
    console.log("success, Promise resolved")
}).catch(function(){
    console.log("some error, Promise rejected")
})