const {
  AWS,
} = require("C:/Users/majda/OneDrive/Documents/TreeHop/frontend//aws-config");

const dynamoDB = new AWS.DynamoDB();

async function deleteWithPartiQL({ year, title }) {
  try {
    console.time("PartiQL Query Duration");
    const results = await dynamoDB
      .executeStatement({
        Statement: `DELETE FROM Movies WHERE "year" = ${year} and "title" = '${title}' `,
      })
      .promise();
    const convertedResult = AWS.DynamoDB.Converter.unmarshall(results.Items[0]);
    console.log("Item Deleted");
    console.timeEnd("PartiQL Delete Duration");
  } catch (err) {
    console.error("Unable to read item", JSON.stringify(err, null, 2));
  }
}
// queryWithPartiQL({ year: 2010, title: "Shutter Island" });
deleteWithPartiQL({ year: 2020, title: "Dumb and Dumber: jq15fk" });
