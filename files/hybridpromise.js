function async_operational_method(){
    let promise1 = new Promise((resolve,reject)=>{
        resolve("Hello")
    })
    let promise2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Adfar")
        },1000)
    })
    let combined_promise = Promise.all([promise1,promise2])
    return combined_promise
}
async function display(){
    let data = await async_operational_method()
    console.log(data)
}
display()