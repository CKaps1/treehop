const {
  AWS,
} = require("C:/Users/majda/OneDrive/Documents/TreeHop/frontend/aws-config");
const {
  stringify,
} = require("C:/Users/majda/OneDrive/Documents/TreeHop/frontend/utils/stringify");

const API = "";

const dynamoDB = new AWS.DynamoDB();

async function insertWithPartiQL(movie) {
  try {
    console.time("PartiQL Insert Duration");
    const item = stringify(movie);
    await dynamoDB
      .executeStatement({ Statement: `INSERT INTO Movies VALUE ${item}` })
      .promise();
    console.log(
      `New Movie with title of '${movie.title}' inserted successfully`
    );
    console.timeEnd("PartiQL Insert Duration");
  } catch (err) {
    console.error("Unable to write item", JSON.stringify(err, null, 2));
  }
}

const movieDetails = {
  year: 2020,
  title: `Dumb and Dumber: ${Math.random().toString(36).slice(-6)}`,
  info: {
    plot: "Nothing happens at all.",
    rating: 0,
  },
};

insertWithPartiQL(movieDetails);
