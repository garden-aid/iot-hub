
'use strict';

const stampit = require('stampit');

const NotifyService = stampit().
  refs({
    sns: null,
  }).
  init((opts) => {
    const instance = opts.instance;
    if(!instance.sns) throw new Error('sns is required');
  }).
  methods({
    publish(msg) {
      const params = {
        Message: message,
        TopicArn: topicArn
      };

      sns.publish(params, cb);
    },
  });

module.exports = NotifyService;
