var AWS = require("aws-sdk");
let awsConfig = {
  region: "ca-central-1",
  endpoint: "http://dynamodb.ca-central-1.amazonaws.com",
  accessKeyId: "AKIAU6XKDNFIM6NHOD6T",
  secretAccessKey: "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",
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let remove = function () {
  var params = {
    TableName: "users",
    Key: {
      email_id: "treehop@gmail.com",
    },
  };
  docClient.delete(params, function (err, data) {
    if (err) {
      console.log("users::delete::error - " + JSON.stringify(err, null, 2));
    } else {
      console.log("users::delete::success");
    }
  });
};

remove();
