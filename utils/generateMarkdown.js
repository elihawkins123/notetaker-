// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none"){
    return `![githublicense](https://img.shields.io/badge/license-${license}-red.svg)`
  }
  return""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none"){
    return `\n- [License](#license)\n`
  }
  return""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents (Optional)
  
  If your README is long, add a table of contents to make it easy for users to find what they need.
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  ${renderLicenseLink(data.license)}
  
  ## Installation
  
  ${data.installation_instructions}
  
  ## Usage
  
  ${data.usage_information}
      
  ## License
 
  ${data.license}
     
  ## Contribute
  
  ${data.contribution_guidelines}
  
  ## Tests
  
  ${data.testing_instructions}

  ## Questions

  ${data.Github_username}
<br>

${data.email}
  
`;
}

module.exports = generateMarkdown;
