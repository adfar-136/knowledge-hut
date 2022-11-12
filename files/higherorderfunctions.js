// const greet = function(name){
//     return function(m){
//         console.log(`Hi ${name}, ${m}`)
//     }
// }
// // const greet_message= greet('Adfar')
// // greet_message("Welcome")
// greet('Adfar')('Welcome')


function greet(name){
    return `Hi ${name}`
}
function greet_name(greeting,message,name){
    console.log(`${greeting(name)}, ${message}`)
}
greet_name(greet,'Welcome','Adfar')