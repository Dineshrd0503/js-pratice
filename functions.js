function greet(name ,age){
    console.log(`Hello, my name is ${name} and I am ${age} years old`)
}
greet("Amit",23)
greet("Rahul",25)


//using arrow fucntions

const sum=(a,b) => {
    console.log(`sum is ${a+b}`)
}
sum(6,6)

const diff=(a,b) =>{
    return a-b;
}
console.log(diff(65,7))

//fucntion to calculate no.of vowels in str

function countvowels(str){
    let count=0;
    const vowels=['a','e','i','o','u'];
    for(let char of str.toLowerCase()){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
}
console.log('no.of vowels in helloworld are' ,countvowels("hello world"))

//creating arrow fucntion to do same

const countvowels1=(str) =>{
    const list=['a','e','i','o','u'];
    return str.toLowerCase().split('').filter(char => list.includes(char)).length;
};

console.log('no.of vowels in helloworld are' ,countvowels1("hello world"))