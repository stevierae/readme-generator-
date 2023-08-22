// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![License:MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  }
  else if(license === 'Apache'){
    return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
  }
  else if(license === 'Mozilla Public'){
    return '![License] MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)';
  }
  else if(license === 'Boost Software'){
  return '![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)';
}
  else if(license === ''){
return '![License: Unlicense](https://img.shields.io/badge/License-Unlicense-blue.svg)';
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT'){
    return 'https://opensource.org/licenses/MIT';
  } else if (license === 'Apache'){
    return 'https://opensourse.org/licenses/Apache-2.0';
  } else if (license === 'Mozilla Public'){
    return 'https://opensource.org/license/MPL-2.0';
  } else if (license === 'Boost Software') {
    return 'https://www.boost.org/LICENSE_1_0.txt';
  } else if (license === "The Unlicense") {
    return 'https://unlicense.org';
  } else {
    return"";
  }
  }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
 function renderLicenseSection(license) {
  // renderLicenseBadge(license)
  // renderLicenseLink(license)
  return `${renderLicenseBadge(license)}
  ${renderLicenseLink(license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Questions
Github: [${data.username}](https://github.com/${data.username})

##License
${data.license}
${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
