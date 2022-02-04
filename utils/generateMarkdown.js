// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `
    ![license](https://img.shields.io/badge/license-${license}-blue.svg)
    `
  }
  return '';

};

// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `
    * [license](#license)
    `
  }
  return '';
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `
    ## License
    this is license under ${license}
    `
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  # ${data.description}

  ---
  ${renderLicenseBadge(data.license)}

`;
}

module.exports = generateMarkdown;
