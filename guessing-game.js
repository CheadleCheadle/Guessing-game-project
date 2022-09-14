const readline = require("readline");

const rl = readline.createInterface({input: process.stdin, ouput: process.stdout});

const randomInRange = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
}
let secretNumber;
let numAttempts = 5;
const askRange = () => {
    
    rl.question("Enter a min number: ", min => {
        rl.question("Enter a max number: ", max => {
            console.log(`I'm thinking of a number between ${min} and ${max}...`);
                secretNumber =  randomInRange(Number(min), Number(max));
                askGuess();
        });
    
    });
    
    
}



const askGuess = () => {
    rl.question("Enter a guess: ", answer => {
        if(numAttempts === 0 ) {
            console.log("You Lose");
            rl.close();
        } 
         else if(checkGuess(Number(answer))) {
            console.log("You win!")
            rl.close();
         } else {
            askGuess();
            numAttempts--;
         }
        
        
    });

}


const checkGuess = (num) => {
    if (num > secretNumber) {
        console.log("Too high.");
        return false;
    }
    if (num < secretNumber) {
        console.log("Too low.");
        return false;
    } else {
        console.log("Correct!");
        return true;
    }
}

askRange();



