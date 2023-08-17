import inquirer from 'inquirer'
import fs from 'fs/promises'
import MaxLengthInputPrompt from 'inquirer-maxlength-input-prompt'
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)
import Triangle from './lib/shapes.mjs'
import Circle  from './lib/shapes.mjs'
import Square  from './lib/shapes.mjs'

let {text, textColor, selectedShape, shapeColor} = await inquirer
    .prompt ([
        {
        type: 'maxlength-input',
        name: 'text',
        message: "Enter up to 3 letters for the text of the image: ",
        maxLength: 3
        },

        {
        type: 'input',
        name: 'textColor',
        message: "What color would you like your text to be?",
        },
        {
        type: "list",
        name: "selectedShape",
        message: "Which shape would you like to use?",
        choices: ['Square', 'Circle', 'Triangle'] 
        },
        {
        type: 'input',
        name: 'shapeColor',
        message: `What color would you like your shape to be?`
        },
    
    ])
    

    if (selectedShape === Square) {
        const logo = new Square(
            `${text}, ${shapeColor}, ${textColor}, svgCode`
        )
    }

    if (selectedShape === Triangle) {
        const logo = new Triangle (
            `${text}, ${shapeColor}, ${textColor}, svgCode`
        )
    }

    else {
        const logo = new Circle (
            `${text}, ${shapeColor}, ${textColor}, svgCode`
        )
    }
    

// let template = `
// <svg version="1.1"
//      width="300" height="200"
//      xmlns="http://www.w3.org/2000/svg">

//   <rect width="100%" height="100%" fill="White" />

//   <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

// </svg>`


// fs.writeFile('logo.svg', template)
