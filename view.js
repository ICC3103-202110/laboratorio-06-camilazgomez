const inquirer= require("inquirer");
const figlet = require('figlet');
const chalk = require('chalk');


const title =()=>{return chalk.cyan(figlet.textSync('Unit Converter App', {
    font: 'marquee',
    horizontalLayout: 'full',
    verticalLayout: 'default',
    width: 160,
    whitespaceBreak: false
}));}

//Function that creates table with parameters
const summary=(model) => {return ([
  { leftValue : model.leftValue, leftUnit: model.leftUnit, rightValue:model.rightValue,rightUnit:model.rightUnit},
]);}

function getSide(model){
    const {source}=model.model;
    return inquirer.prompt([
        { 
            name: "source",
            type: "confirm",
            message: "Left temperature is source?",
        }
    ])
}
function getInputs(model){
    const {source,leftValue,leftUnit,rightValue,rightUnit,temperature,fromScale,toScale}=model;
    if (source===true) {
        return inquirer.prompt([
            {
                name: 'temperature',
                type: 'number',
                message: "Temperature Value to convert?",
                default: leftValue,
            },
            {
                name: 'fromScale',
                type: 'list',
                message: "From?",
                choices: ["Celsius","Fahrenheit","Kelvin"],
            },
            {
                name: 'toScale',
                type: 'list',
                message: "To?",
                choices: ["Celsius","Fahrenheit","Kelvin"],
            }
        ])
    }   
    if (source===false){
        return inquirer.prompt([
            {
                name: "temperature",
                type: 'number',
                message: "Temperature Value to convert?",
                default: rightValue,
            },
            {
                name: "fromScale",
                type: 'list',
                message: "From?",
                choices: ["Celsius","Fahrenheit","Kelvin"],
            },
            {
                name: "toScale",
                type: 'list',
                message: "To?",
                choices: ["Celsius","Fahrenheit","Kelvin"],
            }
        ])
    }
}


function view(model){
    return {
        title:title(),
        table:summary(model),
    }
}


module.exports={
    view,
    getSide,
    getInputs
}

