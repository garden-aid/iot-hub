
// const secrets = require('./secrets.json');

// require('./env')(secrets);

// Setup env vars before requiring functions
const moisture = require('./src/moisture');

module.exports.checkMoistureLevel = moisture.checkLevel;
