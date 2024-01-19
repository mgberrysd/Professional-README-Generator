// Requires the file system and inquirer packages to ask questions and write new files
const fs = require('fs');
const inquirer = require('inquirer');

// Propmpts the user to answer questions about thier project including:
// Project title
// Project description
// Installation Steps
// Usage Instructions
// License (selection)
// Contribution guidelines
// Tests
// github user to contact with questions
// email to contact with questions

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the project name?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a short description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter the installation steps required for this project:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage instructions for this project:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license does this project use?',
      choices: ['None', 'Apache-2.0', 'GPL-3.0', 'MIT', 'BSD-2-Clause', 'BSD-3-Clause', 'BSL-1.0', 'CC0-1.0', 'EPL-2.0', 'AGPL-3.0', 'GPL-2.0', 'LGPL-2.1', 'MPL-2.0', 'Unlicense']
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'Enter contribution guidelines for this project:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter any tests performed for this project:',
    },
    {
      type: 'input',
      name: 'username',
      message: 'What github user should be contacted with questions regarding the project?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What email address should be contacted with questions regarding the project?',
    },
  ])
  .then((data) => {
    // String replacement on the badge for the license so that it renders correctly
    let licenseBadge = data.license.replaceAll('-', '--');

    // template literal of formatted markdown with the responses from inquirer

    const readme = `# ${data.name}

![Static Badge](https://img.shields.io/badge/${licenseBadge}-8A2BE2)

## Description

${data.description}
    
## Table of Contents
        
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
    
## Installation
    
${data.installation}
    
## Usage
    
${data.usage}

## License
    
This project uses the ${data.license} license.
    
## Contributing
    
${data.contribute}
    
## Tests
    
${data.tests}
    
## Questions
    
Questions regarding ${data.name} should be directed to https://github.com/${data.username} on Github or ${data.email}.
 
`;

    // Writes the markdown to README.md in the generated folder after all questions have been answered

    fs.writeFile('./generated/README.md', readme, (err) =>
      err ? console.log(err) : console.log('Successfully created new README file!')
    );
  });
