
const env = require('./env');

const config = require('./config.json');
const secrets = require('./secrets.json');

env(config);
env(secrets, true);

// Setup env vars before requiring functions
const moisture = require('./src/moisture');
const iopipe = require('iopipe')({
   clientId: process.env.iopipeKey
});

module.exports.checkMoistureLevel = iopipe(moisture.checkLevel);
