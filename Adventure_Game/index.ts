#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import { welcome } from "./welcome.js";


// Player class
class Player {
    name: string;
    health: number = 100;
    constructor(name: string) {
        this.name = name;
    }
    healthDecrease() {
        let health = this.health - 25;
        this.health = health;
    };
    healthIncrease() {
        this.health = 100;
    }
};

// Opponent Class
class Opponent {
    name: string;
    health: number = 100;
    constructor(name: string) {
        this.name = name;
    }
    healthDecrease() {
        let health = this.health - 25;
        this.health = health;
    }
    healthIncrease() {
        this.health = 100;
    }
};

// welcome function 
await welcome();


// User input
let user = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: `${chalk.green.bold("Enter Player Name: ")}`
    }
]);

let userOpp = await inquirer.prompt([
    {
        name: "oppSelect",
        type: "list",
        choices: ["Black Pirate", "The Enemy", "Black Panther"],
        message: `${chalk.red.bold("Please Choose your Opponent: ")}`
    }
]);

// Data gathering
let p1 = new Player(user.name);
let o1 = new Opponent(userOpp.oppSelect);


do {
    if (userOpp.oppSelect == "Black Pirate") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                choices: ["Attack", "Drink Portion", "Run for your Life..."],
                message: `${chalk.green.bold("Choose Action: ")}`
            }
        ]);
        if (ask.opt == "Attack") {
            //  it will generate two random numbers
            let generate = Math.floor(Math.random() * 2);
            if (generate > 0) {
                p1.healthDecrease();
                console.log(chalk.bold.bgRed(`${p1.name} health is ${p1.health}% remaining`));
                console.log(chalk.bold.bgBlue(`${o1.name} health is ${o1.health}% remaining`));
                if (p1.health <= 0) {
                    console.log(chalk.bgMagenta(`${p1.name} Lost the Game, ${o1.name} Won.`))
                    process.exit();
                }
            } else if (generate <= 0) {
                o1.healthDecrease();
                console.log(chalk.bold.bgBlue(`${p1.name} health is ${p1.health}% remaining`));
                console.log(chalk.bold.bgRed(`${o1.name} health is ${o1.health}% remaining`));
                if (o1.health <= 0) {
                    console.log(chalk.bgMagenta(`${o1.name} Lost the Game, ${p1.name} Won.`))
                    process.exit();
                }
            }
        } else if (ask.opt == "Drink Portion") {
            p1.healthIncrease();
            console.log(chalk.bold.bgBlue(`You drink Portion now your health is ${p1.health}%`));
        } else if (ask.opt == "Run for your Life...") {
            console.log(chalk.bgMagenta(`You Lost the Game, Better Luck Next Time!!!`))
        }
    } else if (userOpp.oppSelect == "The Enemy") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                choices: ["Attack", "Drink Portion", "Run for your Life..."],
                message: `${chalk.green.bold("Choose Action: ")}`
            }
        ]);
        if (ask.opt == "Attack") {
            //  it will generate two random numbers
            let generate = Math.floor(Math.random() * 2);
            if (generate > 0) {
                p1.healthDecrease();
                console.log(chalk.bold.bgRed(`${p1.name} health is ${p1.health}% remaining`));
                console.log(chalk.bold.bgBlue(`${o1.name} health is ${o1.health}% remaining`));
                if (p1.health <= 0) {
                    console.log(chalk.bgMagenta(`${p1.name} Lost the Game, ${o1.name} Won.`))
                    process.exit()
                }
            } else if (generate <= 0) {
                o1.healthDecrease();
                console.log(chalk.bold.bgBlue(`${p1.name} health is ${p1.health}% remaining`));
                console.log(chalk.bold.bgRed(`${o1.name} health is ${o1.health}% remaining`));
                if (o1.health <= 0) {
                    console.log(chalk.bgMagenta(`${o1.name} Lost the Game, ${p1.name} Won.`))
                    process.exit();
                }
            }
        } else if (ask.opt == "Drink Portion") {
            p1.healthIncrease();
            console.log(chalk.bold.bgBlue(`You drink Portion now your health is ${p1.health}%`));
        } else if (ask.opt == "Run for your Life...") {
            console.log(chalk.bgMagenta(`You Lost the Game, Better Luck Next Time!!!`))
        }
    } else if (userOpp.oppSelect == "Black Panther") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                choices: ["Attack", "Drink Portion", "Run for your Life..."],
                message: `${chalk.green.bold("Choose Action: ")}`
            }
        ]);
        if (ask.opt == "Attack") {
            //  it will generate two random numbers
            let generate = Math.floor(Math.random() * 2);
            if (generate > 0) {
                p1.healthDecrease();
                console.log(chalk.bold.bgRed(`${p1.name} health is ${p1.health}% remaining`));
                console.log(chalk.bold.bgBlue(`${o1.name} health is ${o1.health}% remaining`));
                if (p1.health <= 0) {
                    console.log(chalk.bgMagenta(`${p1.name} Lost the Game, ${o1.name} Won.`))
                    process.exit();
                }
            } else if (generate <= 0) {
                o1.healthDecrease();
                console.log(chalk.bold.bgBlue(`${p1.name} health is ${p1.health}% remaining`));
                console.log(chalk.bold.bgRed(`${o1.name} health is ${o1.health}% remaining`));
                if (o1.health <= 0) {
                    console.log(chalk.bgMagenta(`${o1.name} Lost the Game, ${p1.name} Won.`));
                    process.exit();
                }
            }
        } else if (ask.opt == "Drink Portion") {
            p1.healthIncrease();
            console.log(chalk.bold.bgBlue(`You drink Portion now your health is ${p1.health}%`));
        } else if (ask.opt == "Run for your Life...") {
            console.log(chalk.bgMagenta(`You Lost the Game, Better Luck Next Time!!!`))
        }
    }
} while (true);

