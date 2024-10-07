import * as readline from 'readline';
import { observerPattern } from './implementation/observer';
import { factoryPattern } from './implementation/factory';
import { strategyPattern } from './implementation/strategy';
import { builderPattern } from './implementation/builder';

function input(prompt: string): Promise<string> {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve) => {
        rl.question(prompt, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

function printOptions() {
    console.log('------- USER COMMANDS -------\n');

    console.log("enter 'observer' to run observer pattern");
    console.log("enter 'factory' to run factory pattern");
    console.log("enter 'strategy' to run strategy pattern");
    console.log("enter 'builder' to run builder pattern");
    console.log("enter 'exit' to exit");

    console.log('\n----------------------------\n');
}

async function main() {
    printOptions();
    let userInput = await input('Enter option: ');

    while (userInput !== 'exit') {
        if (userInput === 'observer') {
            observerPattern();
        } else if (userInput === 'factory') {
            factoryPattern();
        } else if (userInput === 'strategy') {
            strategyPattern();
        } else if (userInput === 'builder') {
            builderPattern();
        } else {
            console.log('Entered invalid option...');
        }

        userInput = await input('Enter new option: ');
    }
}

main();

// Design patterns to implement:
// -> Observer
// -> Factory
// -> Abstract Factory
// -> Strategy
// -> Builder
// -> Composite
// -> Singleton
// -> Iterator
// -> Decorator
// -> Command
// -> Visitor
// -> State
// -> Bridge
// -> Adapter
// -> Flywheel
// -> Mediator
// -> Memento
