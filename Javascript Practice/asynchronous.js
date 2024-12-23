const makeRequestToServer = () => {
  const promise = new Promise((resolve, reject) => {
    console.log("Fetching data....");
    setTimeout(() => {
      const isSuccess = Math.random() > 0.5; // 50% chance to succeed or fail
      if (isSuccess) {
        resolve("Request was successful");
      } else {
        reject("Request failed");
      }
    }, 2000);
  });

  return promise;
};

/*------------------------------------------------------------------------------------------------------ */

const handleServerResponse = async () => {
  try {
    const response = await makeRequestToServer();
    console.log(response);
  } catch (error) {
    console.log("Error: ", error);
    throw new Error(error);
  }
};

/*------------------------------------------------------------------------------------------------------ */

const handleServerResponse2 = () => {
  makeRequestToServer()
    .then((response) => console.log(response))
    .catch((error) => console.log("Error: ", error));
};

/*------------------------------------------------------------------------------------------------------ */

handleServerResponse();
