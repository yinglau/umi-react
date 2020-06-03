/**
 * check the component exist or not.
 */

const fs = require('fs');
const path = require('path');

const mocks = fs.readdirSync(path.join(__dirname, '../../mock'));

module.exports = checkMockExists = (name) => {
  return mocks.indexOf(name) >= 0
}
