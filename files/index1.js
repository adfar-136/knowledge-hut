const expr = 'orange'
switch (expr){
    case 'orange':
        console.log("oranges are 100 per dozen")
        break;
    case 'apple':
        console.log("apples are 200 per killo")
        break;
    case 'banana' :
        console.log("banana is 80 rupees dozen")
        break;
    default:
        console.log("adfar")
} 
let sum = 0 
let n = 100
for (let i = 1;i<=n;i++){
   
    sum= sum+i;

}
console.log("sum is", sum)
let i = 8;
let m = 5;
do {
    console.log(i)
    i+=1
}while(i<=m)


const greet =(a,b)=>{
    if(a>b){
        return "a is greater"
    }
    else{
        return "b is greater"
    }
}
console.log(greet(3,5))


