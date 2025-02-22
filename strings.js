let student={
    name:"dinesh",
    age:20,
}
console.log("name of student is ",student.name," age is ",student.age)
console.log("using template strngs")
console.log(`name of student is ${student.name} age is ${student.age}`)
console.log("type of name is ",typeof student.name)
console.log("length of string is ",student.name.length)
console.log("in uoper case ",student.name.toUpperCase())
let a='            hi'
console.log(a.trim())

let b="hello world"
console.log("uisng slicing method ",b.slice(1,8))

console.log("using substring method ",b.substring(1,8))

console.log("uisng subsitue method")
console.log("substitue class intead of world ",b.replace("world","class"))

console.log("using charAt method ",b.charAt(1))

console.log("generating a usernmae woth name given by user")

const prompt=require('prompt-sync')()
let username=prompt("enter your name: ")
console.log("usernmae is \n ","@"+username+username.length)