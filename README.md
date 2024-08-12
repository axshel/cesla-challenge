## CESLA challenge

- All required documentation can be seen at "Documentation" folder.
- Automation for https://github.com/zanelladev/challenge-developer-flutter project mocked API.

### Project structure

- This is a Cypress automation project for API, that is structured by features and splited in negative and positive test cases
- Some negative test cases for POST Students endpoint are skipped due to this mocked data: when sendding blank data or missing data as a required parameter, the API accept
  empty data and mocks if missing parameter, with some random information
- Skiping the test for checking the academic_register as unique due to the fact that the API is allowing to post a new register with the same aacademic register information, returning 201 instead 400.

### How to test

- Required installations before running the commands:
  Node.js

- Install Cypress running the following command:
  npm install cypress [--force] (use --force in case of having Cypress already installed in other project)

- The project was pushed to this repository already with node libraries, so all that should be done is to run one of the following commands:
  - npx cypress open (tests with the browser)
  - npx cypress run (headless mode)
