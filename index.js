const inquirer = require('inquirer');
const fs = require('fs');

function init() {
    inquirer.createPromptModule([
        {
            type: "input",
            message: "Choose the letters for your SVG (Up to 3).",
            name: "letters"

        },
        {
            type: "input",
            message: "Choose a text color (Color keyword or hexadecimal in #XXXXXX format).",
            name: "textColor"
        },
        {
            type: "list",
            message: "Choos a shape for your SVG.",
            name: "shape",
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: "input",
            message: "Choose a shape color (Color keyword or hexadecimal in #XXXXXX format).",
            name: "shapeColor"
        }
    ])
    .then((answers) => {
        console.log("Your svg has been generated!");
    })
}