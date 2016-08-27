'use strict';

const AWS = require('aws-sdk');

const NotifyService = require('./services/notify')

const sns = new AWS.SNS();
const notify = NotifyService({ sns: sns });

// Example event
// { DeviceId: 'test-js-device', Recorded: '2016-08-14T12:39:06.765Z', Level: 3.59334681998007 }

module.exports.checkLevel = (event, context, cb) => {
  if(event.Level < 2.5) {
    const msg = 'Moisture level has dropped to ' + event.Level;
    console.log(msg);

    const topicArn = process.env.mositureNotifyTopic;

    notify.publish(msg, topicArn, cb);
    cb(null, { message: msg, event: event });
    return;
  }

  console.log('Not publishing');
  cb(null, { message: 'No message to publish', event: event });
}
