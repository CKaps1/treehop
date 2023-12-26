var AWS = require("aws-sdk");
let awsConfig = {
  region: "ca-central-1",
  endpoint: "http://dynamodb.ca-central-1.amazonaws.com",
  accessKeyId: "AKIAU6XKDNFIM6NHOD6T",
  secretAccessKey: "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",
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let modify = function () {
  var params = {
    TableName: "users",
    Key: { email_id: "example-1@gmail.com" },
    UpdateExpression: "set updated_by = :byUser, is_deleted = :boolValue",
    ExpressionAttributeValues: {
      ":byUser": "updateUser",
      ":boolValue": true,
    },
    ReturnValues: "UPDATED_NEW",
  };
  docClient.update(params, function (err, data) {
    if (err) {
      console.log("users::update::error - " + JSON.stringify(err, null, 2));
    } else {
      console.log("users::update::success " + JSON.stringify(data));
    }
  });
};

modify();
