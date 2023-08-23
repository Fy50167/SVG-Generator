const inquirer = require('inquirer');
const fs = require('fs');
const Triangle = require('./lib/shapes.js');

function init() {
    inquirer.prompt([
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
            message: "Choose a shape for your SVG.",
            name: "shape",
            choices: ['Circle', 'Triangle', 'Square']
        },
        {
            type: "input",
            message: "Choose a shape color (Color keyword or hexadecimal in #XXXXXX format).",
            name: "shapeColor"
        }
    ])
    .then((answers) => {
        let mySVG;
        switch(answers.shape) {
            case 'Triangle':
                mySVG = new Triangle(answers.letters, answers.textColor, answers.shapeColor);
                break;
        }

        fs.writeFile('./examples/example.svg', mySVG.generateShape(), (err) =>
        err
          ? console.error(err)
          : console.log(
              `Your svg has been generated!`
            )
        )
    })
}

init();