// var a = new Date();
// console.log(a)
// var b = new Date(2003434243540)
// console.log(b)
// var c = new Date('june 22,1990 07:19:37')
// console.log(c)
// var d = new Date(1996,10,13,5,30,32)
// console.log(d)
//print date/month/year
// var date = new Date();
// var day =date.getDate();
// var month = date.getMonth()+1;
// var year = date.getFullYear();
// console.log("Date is:",day,"/",month,"/",year)

// //current time of system

// var today = new Date();
// console.log(today)
// today.setDate(10)
// today.setMonth(3)
// console.log(today)
// var h = today.getHours();
// var m = today.getMinutes();
// var s = today.getSeconds();
// console.log(h,":",m,":",s)
// ISO DAte format
// let val = new Date("2020-08-01")
// console.log(val)
// let val = new Date("2020-08")
// console.log(val)
// let val = new Date("2020")
// console.log(val)

// SHort Date format
// let val = new Date("08/01/2020")
// console.log(val)
//Long Date format
// let val = new Date("sep 02 2020")
// console.log(val)

//Date Difference

// var d1 = new Date("08/14/2020")
// var d2 = new Date("08/16/2020")

// var diff = d2.getTime()- d1.getTime()
// var daydiff = diff/(1000*60*60*24)
// console.log(daydiff)

var d1 =new Date("10/02/1979")
var d2 = new Date()

var diff = d2.getTime()-d1.getTime()
var yearDiff = (diff/(1000*60*60*24*365)).toFixed(0)
console.log(yearDiff)