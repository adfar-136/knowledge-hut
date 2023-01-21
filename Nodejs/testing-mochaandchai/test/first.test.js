// var assert = require('assert');
// describe("my first test case",function(){
//     it("value check",function(){
//         assert.equal([1,2,3].indexOf(5),-1)
//     })
// })
var chai  = require("chai")
var assert = chai.assert
var should = chai.should()
var expect = chai.expect
describe("aspect check",function(){
    let username = "Adfar"
    let myList = {
        item :[{
            id:1,name:"Adfarr"
        }],
        title:"user list"
    }
    it("check string",function(){
        assert.typeOf(username,"string")
    })
    it("equal match",function(){
        assert.equal(username,"Adfar")
    })
    it("length match",function(){
        assert.lengthOf(myList.item,1)
    })
})
describe("should check",function(){
    let username = "Adfar"
    let myList = {
        item :[{
            id:1,name:"Adfarr"
        }],
        title:"user list"
    }
    it("check string",function(){
        username.should.be.a('string')
    })
    it("equal check",function(){
        username.should.equal("Adfar")
    })
    it("length check",function(){
        myList.should.have.property("item").lengthOf(1)
    })
})
describe("check expect",function(){
    let username = "Adfar"
    let myList = {
        item :[{
            id:1,name:"Adfarr"
        }],
        title:"user list",
        address:{
            country:"India",
            phoneNo:["7006525041","7006656354"]
        }
    }
    it("phone No",function(){
        expect(myList).to.have.nested.property("address.phoneNo[0]")
    })
    it("country name",function(){
        expect(myList).to.have.nested.property("address.country")
    })
    it("country name1",function(){
        expect(myList).to.have.nested.include({"address.country":"India"})
    })
    it("country name2",function(){
        expect(myList).to.have.nested.include({"address.phoneNo[0]":"7006525041"})
    })
    it("string check",function(){
        expect(username).to.be.a("string")
    })
    it("equal match",function(){
        expect(username).to.equal("Adfar")
    })
    it("length match",function(){
        expect(username).to.lengthOf(5)
    })
    it("object match",function(){
        expect(myList).to.have.property("item").with.lengthOf(1)
    })
    it("object keys matching",function(){
        expect(myList).to.have.all.keys("item","title","address")
    })
})