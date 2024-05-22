#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";

console.log("\t", "-".repeat(70), "\t");
console.log(
  chalk.bold.blueBright(
    "\t\tWelcome To My Cli Typescript Project - 'TABLE GENERATOR'\t\t"
  )
);
console.log("\t", "-".repeat(70), "\t");

let myTable: boolean = true;

while (myTable) {
    //  user input
  let myinput = await inquirer.prompt([
    {
      name: "num",
      type: "number",
      message: "Enter Your Number:",
    },
  ]);
  let myNumber = myinput.num;
  if (myNumber) {
    console.log(`Here is the table of ${myNumber}`);
    for (let i = 1; i <= 10; i++) {
      console.log(chalk.magentaBright(`${myNumber} x ${i} = ${myNumber * i}`));
    }
  } else {
    console.log(chalk.bold.blue("Kindly Enter a value in numerical form!!!"));
  }

  //asking user if he wants to print table again:

  let againPrint = await inquirer.prompt([
    {
      name: "askAgain",
      type: "confirm",
      message: "Do you want to print another table:",
      default: false,
    },
  ]);

  if (againPrint.askAgain === false) {
    console.log(chalk.bold.red("Exiting!!!"));
    process.exit();
  }
}