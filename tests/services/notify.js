
'use strict';

const expect    = require('chai').expect;
const sinon     = require('sinon');
const BbPromise = require('bluebird');
const AWS       = require('aws-sdk');

const NotifyService = require('../../src/services/notify');

const sns = new AWS.SNS();

describe('#notify()', () => {
  let notifyService = null;

  beforeEach(() => {
    sinon.stub(sns, 'publish').returns(BbPromise.resolve());

    notifyService = NotifyService({
      sns: sns,
    });
  });

  describe('#publish()', () => {
    it('publish', () => {
      expect(() => notifyService.notify('message')).to.not.throw;
    });
  });
});
