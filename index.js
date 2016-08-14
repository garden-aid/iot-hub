
const config = require('./config.json');

require('./env')(config);

// Setup env vars before requiring functions
const moisture = require('./src/moisture');

module.exports.checkMoistureLevel = moisture.checkLevel;
