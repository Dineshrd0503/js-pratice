console.log("hello world")
age=25
name="dinesh"
console.log(age," ",name)
console.log(typeof(age))
let student={
    name:"dinesh",
    age:21

};
console.log("name is ",student.name," type is ",typeof student.name)
console.log("age is ",student["age"])
console.log("incresae age by 5 ",student.age+5)

let product={
    name:"ball pen",
    price: 300,
    rating: 4,
    discount: 10,
    
}


console.log("details of product are ",product)

const profile_details={
    username:"dinesh_rd_0503",
    posts:80,
    followers:679,
    following:690,
    isfolow:false,
}

console.log("profile details are ",profile_details)
console.log(typeof(profile_details))
console.log("data type of usernmae is ",typeof profile_details["username"])

const prompt=require('prompt-sync')();
let n1=prompt("enter a number 1")
let n2=prompt("enter a number 2")
let sum=parseInt(n1)+parseInt(n2)
console.log("sum of two numbers is ",sum)

console.log("suing swithc statement")
let day=prompt("enter a day")
switch(day){
    case "monday":
        console.log("today is monday")
        break;
    case "tuesday":
        console.log("today is tuesday")
        break;
    case "wednesday":
        console.log("today is wednesday")
        break;
    default:
        console.log("today is holiday")
}

console.log(5===5)