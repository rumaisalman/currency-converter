#! usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.yellow("\n Welcome to out Currency Converter.\n"))

let exchangerates: any = {
	"Pakistani Rupee": 1.00,
	"US Dollar": 0.00359,
	"Euro": 0.003321,
	"British Pound": 0.002847,
	"Indian Rupee": 0.299787,
	"Australian Dollar": 0.005471,
	"Canadian Dollar": 0.004891,
	"Singapore Dollar": 0.004854,
	"Malaysian Ringgit": 0.017081,
	"Japanese Yen": 0.545745,
}

let userans = await inquirer.prompt([
	{
		name: "from_currency",
		type: "list",
		message: chalk.magenta("Select the currency to convert from:"),
		choices: ["Pakistani Rupee", "US Dollar", "Euro", "British Pound", "Indian Rupee", "Australian Dollar", "Canadian Dollar", "Singapore Dollar", "Malaysian Ringgit", "Japanese Yen"]
	},
	{
		name: "to_currency",
		type: "list",
		message: chalk.magenta("Select the currency to convert in:"),
		choices: ["Pakistani Rupee", "US Dollar", "Euro", "British Pound", "Indian Rupee", "Australian Dollar", "Canadian Dollar", "Singapore Dollar", "Malaysian Ringgit", "Japanese Yen"]
	},
	{
		name: "amount",
		type: "input",
		message: chalk.magenta("Enter the amount you want to convert:")
	}
]);

//using the formula to convert the currency

let from_amount = exchangerates[userans.from_currency];
let to_amount = exchangerates[userans.to_currency];
let amount = userans.amount

let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

console.log(chalk.blueBright(`Converted Amount = ${converted_amount.toFixed(2)}`));
console.log(chalk.green("Thankyou for using our currency converter "))