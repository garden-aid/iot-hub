'use strict';

const AWS = require('aws-sdk');

const NotifyService = require('./services/notify')

const sns = new AWS.SNS();
const notify = NotifyService({ sns: sns });

module.exports.checkLevel = (event, context, cb) => {
  console.log(event);
  cb(null, { message: 'success' });
}
