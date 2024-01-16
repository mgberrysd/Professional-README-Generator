const fs = require('fs');
const inquirer = require('inquirer');


inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your project name?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a short description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What steps are required to install your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How does the user use your project?',
    },
    {
      type: 'input',
      name: 'features',
      message: 'What features does this project have?',
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'How can others contribute to this project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What tests were performed?',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Who contributed to this project?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license does this project use?',
      choices: ['None', 'Apache-2.0', 'GPL-3.0', 'MIT', 'BSD-2-Clause', 'BSD-3-Clause', 'BSL-1.0', 'CC0-1.0', 'EPL-2.0', 'AGPL-3.0', 'GPL-2.0', 'LGPL-2.1', 'MPL-2.0', 'Unlicense']
    },
  ])
  .then((data) => {
    const readme = `# ${data.name}

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

## Description

${data.description}
    
## Table of Contents
        
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [How to Contribute](#how)
- [Tests](#test)
- [Credits](#credits)
- [License](#license)
    
## Installation
    
${data.installation}
    
## Usage
    
${data.usage}

## Features
    
${data.features}
    
## How to Contribute
    
${data.contribute}
    
## Tests
    
${data.tests}

## Credits
    
${data.credits}
    
## License
    
${data.license}
 
    `;

    fs.writeFile('test.md', readme, (err) =>
      err ? console.log(err) : console.log('Successfully created new README file!')
    );
  });
