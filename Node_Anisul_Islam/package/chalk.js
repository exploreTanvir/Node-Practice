const chalk = require("chalk")

console.log(chalk.blue('Hello world!'));
console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));
console.log(chalk.green('I am a green line ' +chalk.blue.underline.bold('with a blue substring') +' that becomes green again!'));
console.log(chalk.red('Hello', chalk.underline.bgRed.green('world') + '!'));