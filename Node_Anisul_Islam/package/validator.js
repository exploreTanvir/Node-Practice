var validator = require('validator');
const chalk = require("chalk")

const result=validator.isEmail('tanvirhossen@gmail.com');
console.log(result?chalk.bgGreen(result):chalk.bgRed(result))