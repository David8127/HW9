// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${data.license ? data.license : ''}

## Description

${data.description}

### Table of Contents
**[Installation](#installation)**<br>
**[Usage](#usage-instructions)**<br>
**[License](#license)**<br>
**[Contributing Authors](#contributing)**<br>
**[Tests](#tests)**<br>
**[Questions](#questions)**<br>


## Installation

## Usage

## License

## Contributing

## Tests

## Questions


`;

}

module.exports = generateMarkdown;
