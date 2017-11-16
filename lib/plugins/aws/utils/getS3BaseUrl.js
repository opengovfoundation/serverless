'use strict';

module.exports = (region) => {
    return `https://s3${region !== 'us-east-1' ? '-'+region : ''}.amazonaws.com`
};
