// Create an array
let fruits = ["Apple", "Banana", "Mango"];

// Access elements of the array
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana

// Add an element to the array
fruits.push("Orange");
console.log(fruits); // Output: ["Apple", "Banana", "Mango", "Orange"]

// Remove the last element from the array
fruits.pop();
console.log(fruits); // Output: ["Apple", "Banana", "Mango"]

console.log("type is ",typeof fruits)

// Iterate over the array
console.log("for each llop for arras")
for(let fruit of fruits)
{
    console.log(fruit)
}

// finding discount of 10% on every product and diapling final amount

prices=[34,67,90,12,45]
for(let val of prices){
    console.log("final pric e after 10% discount is ",val-(val/10))
}

//using push method
let arr=[1,2,3,4,5]
arr.push(6)
console.log(arr)

//using the toString method
console.log(arr.toString())

//concat methods combines the arrays and returns a new array 
let arr2=arr.concat([7,8,9])
console.log(arr2)
console.log(arr2.toString())
console.log(arr2)

//using the shift method
console.log("intail array befire shift ",arr2)
let val1=arr2.shift()
console.log("array after shift ",arr2)
console.log("the removed value is",val1)

//using the unshift method
console.log("intail array befire unshift ",arr2)
arr2.unshift(1)
console.log("array after unshift ",arr2)

//using the slice method which will not modify the original array
let arr3=arr2.slice(1,3)
console.log('arr3 ',arr3)
console.log('arr2 ',arr2)

//using the splice method which will modify the original array
let arr4=arr2.splice(1,3)
console.log('arr4 ',arr4)

//to replace lement using splice method
let arr5=[1,2,3,4,5]

arr5.splice(2,1,6)
console.log(arr5)