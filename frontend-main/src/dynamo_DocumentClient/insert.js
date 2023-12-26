var AWS = require("aws-sdk");
let awsConfig = {
  region: "ca-central-1",
  endpoint: "http://dynamodb.ca-central-1.amazonaws.com",
  accessKeyId: "AKIAU6XKDNFIM6NHOD6T",
  secretAccessKey: "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",
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let save = function () {
  var input = {
    email_id: "treehop@gmail.com",
    created_by: "clientUser",
    created_on: new Date().toString(),
    updated_by: "clientUser",
    updated_on: new Date().toString(),
    is_deleted: false,
  };
  var params = {
    TableName: "users",
    Item: input,
  };
  docClient.put(params, function (err, data) {
    if (err) {
      console.log("users::save::error - " + JSON.stringify(err, null, 2));
    } else {
      console.log("users::save::success");
    }
  });
};

save();
