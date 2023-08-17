const inquirer = require('inquirer')
const maxLengthInputPrompt = require('inquirer-maxlength-input-prompt')

let {text} = inquirer
    .prompt ([
        {
        type: 'maxlength-input',
        name: 'text',
        message: "Enter up to 3 letters for the text of the image: ",
        maxLength: 3
        },
    ])