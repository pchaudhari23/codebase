const API_URL = 'https://jsonplaceholder.typicode.com/comments';
const ALL_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon?limit=50';

/*------------------------------------------------------------------------------------------------------ */

const makeRequestToServerWithAJAX = () => {
    try {
        let newPromise = new Promise(async (resolve, reject) => {
            $.ajax({
                async: true,
                type: 'GET',
                // method: 'POST'     Use method for version above Jquery 1.9.0
                // accept: "*/*",
                url: ALL_POKEMONS_URL,
                // headers: {"Authorization": "Bearer <SEND TOKEN HERE>"},
                // data: JSON.stringify(jsonData),
                // contentType: "application/json",
                error: function (error) {
                    console.log(error);
                    reject(error)
                },
                success: function(data) {
                    console.log(data);
                    resolve(data);
                }
            });
        });
        return newPromise;
    } catch(error) {
        console.log('Catch Error: ', error);
        throw new Error(error);
    }
}

/*------------------------------------------------------------------------------------------------------ */
const makeRequestToServerWithXMLHTTPRequest = () => {
    try {
        let xhr = new XMLHttpRequest(); 
        xhr.open('GET', API_URL);
        //	xhr.addEventListener();
        //	xhr.setRequestHeader('Content-type', 'application/json'); //set headers
        // xhr.onreadystatechange = function(event) {
        //     console.log(event.target.response)
        // }
        xhr.onload = function() {
            console.log(this.responseText)
        }
        xhr.send();
        // xhr.send(JSON.stringify({name: 'Pritam', age: 27})); // send object inside send methos for POST request

    } catch(error) {
        console.log('Catch Error: ', error);
        throw new Error(error);
    }
}

/*------------------------------------------------------------------------------------------------------*/

async function makeRequestToServerWithXMLHTTPRequestPromise(URL) {
    let promise = new Promise(function (resolve, reject) {
      let xhr = new XMLHttpRequest();
      xhr.open("GET", URL);
      xhr.onload = function () {
        if (xhr.status == 200) {
          resolve(xhr.response);
        } else {
          reject("There is an Error!");
        }
      };
      xhr.send();
    });
    return promise;
}

const consumer = async () => {
    await makeRequestToServerWithXMLHTTPRequestPromise(ALL_POKEMONS_URL).then(
        (result) => {
            console.log({result}); // Log the result of 50 Pokemons
        },
        (error) => {
            console.log('We have encountered an Error!'); // Log an error
    });
}
    
consumer();

/*------------------------------------------------------------------------------------------------------ */
const makeRequestToServerWithFetch = async() => {
    try {
        let response = await fetch(API_URL)
        console.log(response.json())
        // let responsePromiseObject = await response.json() // returns promise object of the response
  	    // console.log(responsePromiseObject)
        // responsePromiseObject.then(()=>{console.log('success')}).catch(()=>{console.log('failure')})
    } catch(error) {
        console.log('Catch Error: ', error);
        throw new Error(error);
    }
}

makeRequestToServerWithFetch();

const makeRequestToServerWithFetchUsingPromise = () => {
	const API_URL = 'https://jsonplaceholder.typicode.com/comments';
	const myPromise = new Promise(async (resolve,reject) => {
		const result = await fetch(API_URL)
		// console.log(result)
		if(result.status == 200) {
			resolve()
		} else {
			reject()
		}
	});
	return myPromise;
}


const handleServerResponseForFetch = () => {
	const response = makeRequestToServerWithFetchUsingPromise();
	response.then(()=>{console.log('Success')}).catch(()=>{console.log('failure')})
}

handleServerResponseForFetch() // change url for error - promise reject
/*------------------------------------------------------------------------------------------------------ */

const handleServerResponse = async () => {
    try {
        await makeRequestToServerWithAJAX().then(()=>{console.log('Success')}).catch(()=>{console.log('failure')});
    } catch(error) {
        console.log('Catch Error: ', error);
        throw new Error(error);
    }
}

/*------------------------------------------------------------------------------------------------------ */

handleServerResponse()

makeRequestToServerWithXMLHTTPRequest()