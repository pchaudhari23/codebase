const API_URL = "https://jsonplaceholder.typicode.com/posts";

/*------------------------------------------------------------------------------------------------------ */

const makeAJAXRequest = () => {
  try {
    let promise = new Promise(async (resolve, reject) => {
      $.ajax({
        // async: true,
        type: "GET",
        // method: 'POST'     Use method for version above Jquery 1.9.0
        // accept: "*/*",
        url: API_URL,
        // headers: {"Authorization": "Bearer <SEND TOKEN HERE>"},
        // data: JSON.stringify(jsonData),
        // contentType: "application/json",
        error: function (error) {
          console.log(error);
          reject(error);
        },
        success: function (data) {
          console.log(data);
          resolve(data);
        },
      });
    });
    return promise;
  } catch (error) {
    console.log("Catch Error: ", error);
    throw new Error(error);
  }
};

/*------------------------------------------------------------------------------------------------------ */

const makeFetchRequest = async () => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Fetched Data:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const postDataWithFetch = async () => {
  try {
    const postData = {
      title: "foo",
      body: "bar",
      userId: 1,
    };

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    console.log("Posted Data Response:", data);
  } catch (error) {
    console.error("Error posting data:", error);
  }
};

/*------------------------------------------------------------------------------------------------------ */

const makeXMLHTTPRequest = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", API_URL, true);
  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log("Fetched Data:", JSON.parse(xhr.responseText));
    } else {
      console.error(`HTTP error! Status: ${xhr.status}`);
    }
  };
  xhr.onerror = () => console.error("Network error occurred.");
  xhr.send();
};

/*------------------------------------------------------------------------------------------------------ */

const handleServerResponse = async () => {
  try {
    //   const response = await makeAJAXRequest();
    //   const response = await makeXMLHTTPRequest();
    const response = await makeFetchRequest();
    console.log(response);
  } catch (error) {
    console.log("Error: ", error);
    throw new Error(error);
  }
};

/*------------------------------------------------------------------------------------------------------ */

handleServerResponse();

// There should be either async/await with try/catch OR .then().catch()
// Using both together is unnecessary even if technically not wrong.
// then called on promise resolve, catch called on promise reject
// Whatever is passed in resolve() - it is collected in then() method
// Whatever is passed in reject() - it is collected in catch() method
// await keyword in the async/ await function stops the function exceution until the code in front of await(eg: fetching data from api) is completed. Once we have the response data, the furthur code is executed.
// .then() and .catch() - chain methods don't stop until the data from api is received. they continue the code after that and whenever the response is received, they will store or set the received data in variable
// make a habit to write all the code in try catch blocks
// make the await api call in the try block
// Usually throw Error class object in a Promise reject
// Promise.all, Promise.race????

// Learn how to :
// 1.Convert an async/await function into using .then().catch()
// 2.Convert .then().catch() function into using async/await
// 3.How to promisify a function
