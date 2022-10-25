var num = 2;
function double(){
    function triple(y){
        var neww = y*y*y
        return neww
    };
    var newNumber = triple(4)
    return newNumber
}
var newNumber = double()
console.log(newNumber)