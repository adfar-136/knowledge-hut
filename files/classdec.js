class student{
    constructor(name,age){
        this.studentName = name;
        this.studentAge = age;
        console.log("Constructor called")
    }
    hello(){
        console.log("Hello " + this.studentName  + " Your age is " + this.studentAge)
    }
}
let a = new student("Adfar", 25)
let b = new student("Mittal", 25)
a.hello()
b.hello()