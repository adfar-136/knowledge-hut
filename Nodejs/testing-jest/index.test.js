const fetchData = require("./index")
const promiseData = require("./fetchData")
const asyncData = require("./Async")
// test("add 6+14 to equal to 7",()=>{
//     expect(add(6,14)).toBe(20)
// })
test("2+2 is equal to 4",()=>{
    expect(2+2).toBe(4)
})
test("object data",()=>{
    const data = {age:25}
    data["salary"] = 2000
    expect(data).toEqual({age:25,salary:2000})
})

test("adding positive numbers is not zero",()=>{
    for(let a=1;a<10;a++){
        for(let b =1;b<10;b++){
            expect(a+b).not.toBe(0)
        }
    }
})

test("null",()=>{
    const n = null;
    expect(n).toBeNull();
    expect(n).not.toBeUndefined()
    expect(n).not.toBeTruthy()
    expect(n).toBeFalsy()
})
//Numbers

test("two plus two",()=>{
    const value = 2+2
    expect(value).toBeGreaterThan(3)
    expect(value).toBeLessThan(5)
    expect(value).toBeGreaterThanOrEqual(3.5)
    expect(value).toBeLessThanOrEqual(4.5)
    expect(value).toBe(4)
})

//floating number

test("adding floating numbers",()=>{
    const value = 0.3 +0.5
    expect(value).toBeCloseTo(0.8)
})

//array or iterables

const names = ["Adfar","Dosunmu","Sherpa","Stephen","Santiago","Raveen"]
test("names array has Dosunmu or not",()=>{
    expect(names).toContain("Adfar")
})
// function fetchData(back){
//     return back("Hello Adfar")
// }

test("testing callback function", done =>{
    function callback(data){
        try {
            expect(data).toBe("Hello Adfar")
            done()
        } catch (error) {
            done(error)
        }
    }
    fetchData(callback)
})

test("Promise testintg",()=>{
    return promiseData().then((data)=>{
        expect(data).toBe("Hello Adfar")
    })
})

test("asynct function testing",async ()=>{
    const data = await asyncData()
    expect(data).toBe("Done Adfar")
})