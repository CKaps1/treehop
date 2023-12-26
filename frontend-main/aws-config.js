require("dotenv").config();
const AWS = require("aws-sdk");

let awsConfig = {
  region: "ca-central-1",
  endpoint: "http://dynamodb.ca-central-1.amazonaws.com",
  accessKeyId: "AKIAU6XKDNFIM6NHOD6T",
  secretAccessKey: "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",
};
AWS.config.update(awsConfig);

module.exports = { AWS };
