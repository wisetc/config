/**
 * Say hello to user.
 * @param {string} username
 */
function hello(username) {
  console.log(`hello, ${username}`);
}

Cypress.Commands.add('hello', hello);
