// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if (license = 'MIT') {
//     return "https://choosealicense.com/licenses/mit/" 
//   } else if (license = 'ISC') {
//     return "https://choosealicense.com/licenses/isc/"
//   } else if (license = 'Boost') {
//     return "https://choosealicense.com/licenses/bsl-1.0/"
//   } else if (license = 'Apache') {
//     return "https://choosealicense.com/licenses/apache-2.0/"
//   } else if (license = 'Mozilla') {
//     return "https://choosealicense.com/licenses/mpl-2.0/"
//   } else {
//     return ''
//   }
// };

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
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

### ${data.license ? data.license : ''}
### Link:

`;

}

module.exports = generateMarkdown;
