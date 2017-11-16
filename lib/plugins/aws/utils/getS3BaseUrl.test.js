'use strict';

const expect = require('chai').expect;
const getS3BaseUrl = require('./getS3BaseUrl');

describe('#getS3BaseUrl()', () => {
  it('should return the correct region-specific url', () => {
    const test = [
        ['us-east-1', 'https://s3.amazonaws.com'],
        ['us-east-2', 'https://s3-us-east-2.amazonaws.com'],
        ['us-gov-west-1', 'https://s3-us-gov-west-1.amazonaws.com'],
    ];

    test.forEach(([given, expected]) => {
      expect(getS3BaseUrl(given)).to.equal(expected);
    });
  });
});
