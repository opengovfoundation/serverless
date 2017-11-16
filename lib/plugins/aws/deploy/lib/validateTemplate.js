'use strict';

const getS3BaseUrl = require('../../utils/getS3BaseUrl');

module.exports = {
  validateTemplate() {
    const bucketName = this.bucketName;
    const artifactDirectoryName = this.serverless.service.package.artifactDirectoryName;
    const compiledTemplateFileName = 'compiled-cloudformation-template.json';

    this.serverless.cli.log('Validating template...');
    const params = {
      TemplateURL: `${getS3BaseUrl(this.options.region)}/${bucketName}/${artifactDirectoryName}/${compiledTemplateFileName}`,
    };

    return this.provider.request(
      'CloudFormation',
      'validateTemplate',
      params
    ).catch((error) => {
      const errorMessage = [
        'The CloudFormation template is invalid:',
        ` ${error.message}`,
      ].join('');
      throw new Error(errorMessage);
    });
  },
};
