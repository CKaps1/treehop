import React from "react";

const apiURL = "https://4r8i9z3ua8.execute-api.ca-central-1.amazonaws.com";

//store state as object and stringify it for webserver

class GetRequestDel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      id: null,
      errorMessage: null,
    };
  }

  async componentDidMount() {
    // DELETE request using fetch with error handling
    fetch(apiURL + "/" + id, {
      method: "DELETE",
    })
      .then(async (response) => {
        const data = await response.json();

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusText
          const error = response.statusText;
          return Promise.reject(error);
        }
        this.setState({ data });
      })
      .catch((error) => {
        this.setState({ errorMessage: error.toString() });
        console.error("There was an error!", error);
      });
  }

  render() {
    const { errorMessage } = this.state;
    return (
      <div>
        <h5>DELETE Request</h5>
        <div>Error message: {errorMessage}</div>
      </div>
    );
  }
}

//store state as object and stringify it for webserver

export { GetRequestDel };
