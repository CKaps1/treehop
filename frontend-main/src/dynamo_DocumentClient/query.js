var AWS = require("aws-sdk");
let awsConfig = {
  region: "ca-central-1",
  endpoint: "http://dynamodb.ca-central-1.amazonaws.com",
  accessKeyId: "AKIAU6XKDNFIM6NHOD6T",
  secretAccessKey: "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",
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();
let fetchOneByKey = function () {
  var params = {
    TableName: "users",
    Key: {
      email_id: "example-1@gmail.com",
    },
  };
  docClient.get(params, function (err, data) {
    if (err) {
      console.log(
        "users::fetchOneByKey::error - " + JSON.stringify(err, null, 2)
      );
    } else {
      console.log(
        "users::fetchOneByKey::success - " + JSON.stringify(data, null, 2)
      );
    }
  });
};

fetchOneByKey();
