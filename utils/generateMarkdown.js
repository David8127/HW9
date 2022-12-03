
// A function that generates markdown for README
function generateMarkdown(data) {
return `# ${data.title}

${data.license ? data.license : ''}

## Description 

${data.description}

### ***Table of Contents*** 
**[Installation](#installation)**<br>
**[Usage](#usage-instructions)**<br>
**[Contributing](#contributing)**<br>
**[Tests](#tests)**<br>
**[Questions](#questions)**<br>
**[License](#license)**<br>


## Installation 

${data.installation}

## Usage 

${data.usage}

## Contributing 

${data.contributing}

## Tests 

${data.tests}

## Questions 

### For any questions, comments, or curiosities, please feel free to contact me at:

*Github Profile* : <https://github.com/${data.username}>

*Email* : ${data.email}

## License 

### This application is covered under the following license(s):
### ${data.license ? data.license : ''}

`;

}

module.exports = generateMarkdown;
