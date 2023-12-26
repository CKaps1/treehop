import axios from "axios";
const API = "https://4r8i9z3ua8.execute-api.ca-central-1.amazonaws.com"
const {
  AWS,
} = require("C:/Users/majda/OneDrive/Documents/TreeHop/frontend//aws-config");

const dynamoDB = new AWS.DynamoDB();

//testing

//get
const requestAPI = async () => {
  try{
  const idk = await.axios.fetch(API)
  }
  catch(){
    console.log("shit didnt work")
  }
}

//put
const requestAPI = async () => {
  try{
  const idk = await.axios.get(API)
  }
  catch(){
    console.log("shit didnt work")
  }
}


async function queryWithPartiQL({ year, title }) {
  try {
    console.time("PartiQL Query Duration");
    const results = await dynamoDB
      .executeStatement({
        Statement: `SELECT * FROM Movies WHERE "year" = ${year} and "title" = '${title}' `,
      })
      .promise();
    const convertedResult = AWS.DynamoDB.Converter.unmarshall(results.Items[0]);
    console.log("Query results", JSON.stringify(convertedResult, null, 2));
    console.timeEnd("PartiQL Query Duration");
  } catch (err) {
    console.error("Unable to read item", JSON.stringify(err, null, 2));
  }
}

// queryWithPartiQL({ year: 2010, title: "Shutter Island" });
queryWithPartiQL({ year: 2020, title: "Dumb and Dumber: zsgqws" });
