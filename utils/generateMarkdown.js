// A function to render the license badge when called.
function renderLicenseBadge(license) {
  if (license === 'none') {
    return '';
  } else {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](#license)`;
  }
};

// A function that renders the license link
function renderLicenseLink(license) {
  if (license === 'none') {
    return '';
  } else {
    return `https://opensource.org/license/${license}/`;
  }
};

// A function that creates the license section with the created link.
function renderLicenseSection(license) {
  if (license === 'none') {
    return '';
  } else {
    return `Please follow the link for more information on the open source license <a href="${renderLicenseLink(license)}" alt="${license}">${license}</a>`;
  }
};

// A function that generates the markdown file content.
exports.generateMarkdown = function ({title, description, installInstructions, usageInfo, license, contribution, testing, username, email}) {
  return `# ${title}
  ${renderLicenseBadge(license)}
## Description
${description}

## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

<a id="installation"></a>
## Installation
${installInstructions}

<a id="usage"></a>
## Usage
${usageInfo}

<a id="license"></a>
## License
${renderLicenseSection(license)}

<a id="contributing"></a>
## Contributing
${contribution}

<a id="tests"></a>
## Tests
${testing}

<a id="questions"></a>
## Questions
For questions please feel free to reach out to me through GitHub or email
Github:  https://www.github.com/${username}

Email: ${email}
`;
};

