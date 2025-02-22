let companies=["facebook", "twitter", "microsoft.com", "yahoo", "google","uber"]

console.log("intial list is  ",companies)
//remove the first company from the list

companies.shift()
console.log(companies) // ["twitter", "microsoft.com", "yahoo", "google"]

//remove uber and add ola in its place
let change1=companies.splice(4,1,"ola")

console.log(companies) // ["twitter", "microsoft.com", "yahoo", "google", "ola"]

//add amaxon at the end of the list
companies.push("amazon")
console.log(companies) // ["twitter", "microsoft.com", "yahoo", "google", "ola", "amazon"]