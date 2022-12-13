import inquirer from "inquirer"

let randomNum = Math.floor(Math.random() * 10);

const guessesdNumFunc = async () => {
    for (let i = 1; i <= 3; i++) {
        console.log(`Iteration ${i}`);
        let guessesdNum: { num: number } = await inquirer.prompt([
            {
                name: "num",
                type: "number",
                message: "Guessed The Number"
            },
        ]);

        if (guessesdNum.num === randomNum) {
            console.log("Your Guessed Is Great...!");
            break;

        }

        else {
            console.log("Sorry! Try Again");
        }
    }
    console.log(`Correct Number is ${randomNum}`);
}

guessesdNumFunc();







