import inquirer from 'inquirer'
import fs from 'fs/promises'
import MaxLengthInputPrompt from 'inquirer-maxlength-input-prompt'
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)
import Shape from './lib/shapes.mjs'
import Triangle from './lib/shapes.mjs'
import Circle  from './lib/shapes.mjs'
import Square  from './lib/shapes.mjs'
let logo;


// Prompt user for parameters of their logo design
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
    
// Check user selected shape and render the new object. Write code into logo.svg
    if (selectedShape === 'Square') {
        logo = new Square (
            `${text}`, `${shapeColor}`, `${textColor}`,`<rect x="75" y="27" width="150" height="150" fill="${shapeColor}" />`)
            
            fs.writeFile('logo.svg', logo.render())
        
    }

    if (selectedShape === 'Triangle') {
        logo = new Triangle (
            `${text}`, `${shapeColor}`, `${textColor}`, `<polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" />`)
            fs.writeFile('logo.svg', logo.render())
        
    }

    else {
        logo = new Circle (
            `${text}`, `${shapeColor}`, `${textColor}`, `<circle cx="150" cy="107" r="80" fill="${shapeColor}" />`)
            fs.writeFile('logo.svg', logo.render())
    }

    //write confirm message
console.log('Generated logo.svg')

