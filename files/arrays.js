
// var arr1=[1,2,3,4]
// console.log(arr1)
// //push method
// arr1.push('adfar',12)
// console.log(arr1)
// pop method
// var x = arr1.pop()
// console.log(x)
// console.log(arr1)
// //slice method
// var b = arr1.slice(1)
// console.log(b)
//splice method
// var newArr = [1,2,3,4,5,6,7,8,9,0]
// var t = newArr.slice(2)
// console.log(newArr)
// var c = newArr.splice(2)
// console.log(c)
// console.log(t)
// console.log(newArr)
//Shift method
// var y = [1,2,3,4,5,6,7]
// console.log(y.length)
// var o=y.shift()
// console.log(y)
// console.log(o)
// console.log(y.length)
//unshift method
// var u = [1,2,3,4]
// u.unshift('a','b','c')
// console.log(u)

//concat() method
// var arr1 = [1,2,3,4]
// var arr2 = [5,6,7,8]
// var arr3 = [9,0,10,11]
// var arr4 = [].concat(arr1,arr2,arr3)
// console.log(arr4)

// //indexOf() method
// console.log(arr1.indexOf(8))
//for ....of loop
// let scores = [80,90,100,110,120]
// for (let x of scores){
//     x = x+5;
//     console.log(x)
// }
// let colors = ['red','green','yellow','blue']
// for( const [index,color] of colors.entries()){
//     console.log(`${color} is at index ${index}`)
//     console.log("Index of",color, "is ",index)
// };
// let str = "abcdef"
// for(let c of str){
//     console.log(c)
// }
// function add(a,b,c,...other){
//     console.log(other)
//     return a+b+c

// }
// const result = add(5,6,7,0,8,9,9,0,8,7,6)
// console.log(result)
// function add(...input){
//     let sum = 0;
//     for (let i of input){
//         sum =sum+i;
//     }
//     return sum
// }
// console.log(add(1,2))
// // console.log(add(1,2,4,5,6,7,8,788,887,63,876))
// function add(a,b,...c){
//     console.log(c)
//     console.log(c[2])
//     console.log(c.length)
//     console.log(c.indexOf('STEPHEN'))

// }
// add('ADFAR','ANWAR','MITTAL','STEPHEN','SHERPA')
// let letters = ['a','b','c','d','e']
// let letters2 = ['f','g','h','i']
// let newLetters =[...letters,...letters2]
// console.log(newLetters)
// var names = ['adfar','mittal','sherpa']
// function getNames(name1,name2,name3){
//     console.log(name1,name2,name3)
// }
// getNames('adfar','mittal','sherpa')
// getNames(names[0],names[1],names[2])
// getNames(...names)
// includes() method

// // var nums = [1,2,3,4,5]
// // console.log(nums.includes(3,6))

// // //from() method
// // console.log(Array.from("ABCDEFGH"))
// // console.log(Array.from([1,2,3,4],x=>x+x))

// // //join() method
// // var ar = [1,2,3,4,5,6,7]
// // console.log(ar.join('|'))
// // console.log(ar)
// // console.log(ar.join())
// // console.log(ar.join(""))

// // //split ) method

// // var str1 = 'it is a good day'
// // var array1 = str1.split(" ",5)
// // console.log(array1)

// // //map method

// // var arr8 = [2,5,7,9,4,0]
// // var newArrr = arr8.map(function(x){
// //     return x*10
// // })
// // console.log(newArrr)
// // var newArrrr = arr8.map(x=>x*10)
// // console.log(newArrrr)
// // var newArrrrr = arr8.map(Math.sqrt)

// console.log(newArrrrr)
//sort method  

const fruits = ['banana','apple','orange','mango']
fruits.sort()
console.log(fruits)
fruits.reverse()
console.log(fruits)


// const nums = [23,43,11,24,69,7]
// nums.sort()
// console.log(nums)
// const nums = [23,43,11,24,69,7]
// nums.sort(function(a,b){
//     console.log(a,b)
//     return a-b
// })

// console.log(nums)
// const numss = [23,43,11,24,69,7]
// numss.sort(function(a,b){
//     console.log(a,b)
//     return b-a
// })

// console.log(numss)

// let numbers = [20,5.2,-120,100,30,0]
// console.log(numbers.sort(function(a,b){
    
//         return a-b
//     }))

// filter() method
// function canVote(age){
//     return age >=18;
// }
// function func(){
//     var filtered = [23,14,25,19,24,50,45,3,4,5,6].filter(canVote)
//     console.log(filtered)

// }
// func()

// function isEven(val){
//     return val%2==1;
// }
// var filtered = [12,3,14,5,7,9,8,6].filter(isEven)
// console.log(filtered)

// const array5 = [-3,-2,-1,0,1,2,3,4,5,6,7,8,9,11,13,17,19]

// function isPrime(num){
//     for (let i = 2;num>i;i++){
//         if(num%i === 0){
//             return false
//         }
//     }
//     return num>1
// }
// console.log(array5.filter(isPrime))

//reduce() method

// var arr6=[10,20,30,40,50,60]
// function sum(sum, num){
//     return sum+num
// }
// console.log(arr6.reduce(sum,0))

var arr7 = [1.5, 20.3, 34.5,67.8]
function sum(sum,num){
    return sum + Math.round(num)
}
console.log(arr7.reduce(sum,0))
