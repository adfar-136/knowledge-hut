let data = [5,9,13,17,45,67,89,100]
let find = 89;
let start = 0;
let end = data.length-1;
let position;
while(start <= end)
{
    let middle = Math.floor((start+end)/2) 
    if(data[middle]===find){
        position= middle;
        break;
    } else if(data[middle] < find){
        start = middle +1
    } else {
        end = middle-1
    } 
}
console.log(position)