const prompt = require('prompt-sync')();

let number = Math.floor(Math.random() * 10) + 1;
let chances = 10;

while (chances > 0) {
    let input = parseInt(prompt("Enter a number between 1 to 10: "));

    if (input === number) {
        console.log("You have guessed the number with", chances, "chances left!");
        break;
    } else {
        console.log("You have not guessed the number.");
        chances--;
        if (chances === 0) {
            console.log("No more chances left.");
        } else {
            console.log("Try again. Chances left:", chances);
        }
    }
}

console.log("The number was", number);