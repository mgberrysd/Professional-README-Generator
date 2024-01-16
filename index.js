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
        name: 'location',
        message: 'Where are you from?',
      },
      {
        type: 'input',
        name: 'color',
        message: 'What is your favorite color?',
      },
  ])
  .then((data) => {
    const html = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Parsing JSON</title>
      </head>
          <h1>${data.name}</h1>
        </header>
          <section>
            <header>
              <h2>
                ${data.location}
              </h2>
            </header>
            <footer>
            ${data.color}
            </footer>
          </section>
      </body>
    </html>
    `;

    fs.writeFile('test.md', html, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
