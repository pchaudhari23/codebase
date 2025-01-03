// NODE JS:
const fs = require("fs");
const http = require("http");
const https = require("https");
const url = require("url");
const FormData = require("form-data");
const path = require("path");
const cheerio = require("cheerio");
const axios = require("axios");
const formidable = require("formidable");
const nodemailer = require("nodemailer");
// -----------------------------------------------------------------------------------------------------------------------------
// 1.Create a Node.js script that reads a file from the filesystem and logs its content to the console.
function readFileContent() {
  const filepath = path.join(__dirname, "data", "question1.txt");

  fs.readFile(filepath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
    } else {
      console.log("File Content:", data);
    }
  });
}

// readFileContent();

// -----------------------------------------------------------------------------------------------------------------------------
// 2.Create a basic HTTP server in Node.js that responds with "Hello World" when accessed.
function createHttpServer() {
  const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World\n");
  });

  const PORT = 3000;
  server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

// createHttpServer();

// -----------------------------------------------------------------------------------------------------------------------------
// 3.Build a Node.js program that fetches data from a public API (e.g., JSONPlaceholder) and logs the result.
function fetchDataFromApi() {
  const url = "https://jsonplaceholder.typicode.com/posts/1";

  https
    .get(url, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        const jsonData = JSON.parse(data);
        console.log(jsonData);
      });
    })
    .on("error", (err) => {
      console.log("Error fetching data:", err);
    });
}

// fetchDataFromApi();

// -----------------------------------------------------------------------------------------------------------------------------
// 4.Create a Node.js program that takes command-line arguments and logs them to the console.
function logCommandLineArguments() {
  const args = process.argv.slice(2); // arguments passed after the script name
  console.log("Command-line Arguments:", args);
}

// logCommandLineArguments();

// -----------------------------------------------------------------------------------------------------------------------------
// 5.Create a script to write an array of objects into a JSON file.
function writeArrayToJsonFile() {
  const data = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
  ];

  const filepath = path.join(__dirname, "data", "question5.json");

  fs.writeFile(filepath, JSON.stringify(data, null, 2), (err) => {
    if (err) {
      console.error("Error writing to file:", err);
    } else {
      console.log("Data successfully written to data.json");
    }
  });
}

// writeArrayToJsonFile();

// -----------------------------------------------------------------------------------------------------------------------------
// 6.Implement a simple logging system in Node.js that logs messages to a file with timestamps.
function logMessageToFile(message) {
  const filePath = path.join(__dirname, "data", "question6.txt");
  const timestamp = new Date().toISOString();
  const logMessage = `${message} - ${timestamp}\n`;

  fs.appendFile(filePath, logMessage, (err) => {
    if (err) {
      console.error("Error writing to log file:", err);
    } else {
      console.log("Log written sucessfully");
    }
  });
}

// logMessageToFile("Server log at: ");

// -----------------------------------------------------------------------------------------------------------------------------
// 7.Create a Node.js script that asynchronously reads files in a directory and prints out the file names.
function readFilesInDirectory() {
  const dirPath = path.join(__dirname, "data");

  fs.readdir(dirPath, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
    } else {
      console.log("Files in directory:");
      files.forEach((file) => {
        console.log(file);
      });
    }
  });
}

// readFilesInDirectory();

// -----------------------------------------------------------------------------------------------------------------------------
// 8.Build a Node.js script to create a basic TCP server that listens on a port and prints incoming messages.
const net = require("net");

function createTcpServer() {
  const server = net.createServer((socket) => {
    console.log("Client connected");

    socket.on("data", (data) => {
      console.log("Received message:", data.toString());
    });

    socket.on("end", () => {
      console.log("Client disconnected");
    });
  });

  const PORT = 4000;
  server.listen(PORT, () => {
    console.log(`TCP server is running on port ${PORT}`);
  });
}

// createTcpServer();

// -----------------------------------------------------------------------------------------------------------------------------
// 9.Build a script that takes an input file, converts its content to uppercase, and saves it to another file.
function convertFileToUpperCase() {
  const inputFile = "input.txt"; // specify input file
  const outputFile = "output.txt"; // specify output file

  fs.readFile(inputFile, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return;
    }

    const uppercasedContent = data.toUpperCase();

    fs.writeFile(outputFile, uppercasedContent, (err) => {
      if (err) {
        console.error("Error writing to the output file:", err);
      } else {
        console.log("Content successfully written to output.txt");
      }
    });
  });
}

// convertFileToUpperCase();

// -----------------------------------------------------------------------------------------------------------------------------
// 10.Create a Node.js program that implements a simple calculator supporting addition, subtraction, multiplication, and division from user input.
function simpleCalculator() {
  const [operation, num1, num2] = process.argv.slice(2);

  const number1 = parseFloat(num1);
  const number2 = parseFloat(num2);

  if (isNaN(number1) || isNaN(number2)) {
    console.error("Invalid numbers provided.");
    return;
  }

  let result;
  switch (operation) {
    case "add":
      result = number1 + number2;
      break;
    case "subtract":
      result = number1 - number2;
      break;
    case "multiply":
      result = number1 * number2;
      break;
    case "divide":
      if (number2 === 0) {
        console.error("Cannot divide by zero.");
        return;
      }
      result = number1 / number2;
      break;
    default:
      console.error(
        "Invalid operation. Use add, subtract, multiply, or divide."
      );
      return;
  }

  console.log(`Result: ${result}`);
}

// simpleCalculator();

// -----------------------------------------------------------------------------------------------------------------------------
// 11.Create a file watcher in Node.js that watches for file changes in a directory and logs changes to the console.
const dirpath = "./"; // Specify your directory path

function watchDirectory() {
  fs.watch(dirpath, (eventType, filename) => {
    if (filename) {
      console.log(`File ${filename} has been ${eventType}`);
    } else {
      console.log("A change occurred in the directory");
    }
  });
}

// watchDirectory();

// -----------------------------------------------------------------------------------------------------------------------------
// 12.Implement a Node.js program that fetches and processes JSON data, transforming it into a specific structure.
function fetchAndProcessData() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  https.get(url, (res) => {
    let data = "";
    res.on("data", (chunk) => {
      data += chunk;
    });
    res.on("end", () => {
      const jsonData = JSON.parse(data);
      const transformedData = jsonData.map((post) => ({
        postId: post.id,
        title: post.title,
        body: post.body.substring(0, 100), // Extract a part of the body for brevity
      }));
      console.log(transformedData);
    });
  });
}

// fetchAndProcessData();

// -----------------------------------------------------------------------------------------------------------------------------
// 13.Create a Node.js function to handle a recursive directory listing (print nested folders and files).
function listFilesRecursively(dir) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      return;
    }
    files.forEach((file) => {
      const filePath = path.join(dir, file);
      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error("Error getting stats:", err);
          return;
        }
        if (stats.isDirectory()) {
          console.log(`Directory: ${filePath}`);
          listFilesRecursively(filePath); // Recursive call for subdirectories
        } else {
          console.log(`File: ${filePath}`);
        }
      });
    });
  });
}

// listFilesRecursively('./'); // Specify the root directory to start

// -----------------------------------------------------------------------------------------------------------------------------
// 14.Write a Node.js script that serves a file over HTTP (e.g., an HTML file or image).
function serveFile() {
  const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, "index.html"); // Specify the file path
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("File not found");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  });

  const PORT = 3000;
  server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

// serveFile();

// -----------------------------------------------------------------------------------------------------------------------------
// 15.Build a program to fetch HTML from a URL and parse the page’s title and meta description using a Node.js module.
function fetchAndParseHtml() {
  const url = "https://example.com"; // Replace with the URL

  https.get(url, (res) => {
    let data = "";
    res.on("data", (chunk) => {
      data += chunk;
    });
    res.on("end", () => {
      const $ = cheerio.load(data);
      const title = $("title").text();
      const metaDescription = $('meta[name="description"]').attr("content");
      console.log(`Title: ${title}`);
      console.log(`Meta Description: ${metaDescription}`);
    });
  });
}

// fetchAndParseHtml();

// -----------------------------------------------------------------------------------------------------------------------------
// 16.Create a simple REST API with GET, POST, PUT, and DELETE methods using Node.js’ HTTP module.
const { StringDecoder } = require("string_decoder");

let dataStore = []; // Simple in-memory data store

function createRestApiServer() {
  const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const method = req.method.toLowerCase();
    const decoder = new StringDecoder("utf-8");
    let buffer = "";

    req.on("data", (chunk) => {
      buffer += decoder.write(chunk);
    });

    req.on("end", () => {
      buffer += decoder.end();

      res.setHeader("Content-Type", "application/json");
      if (method === "get") {
        res.writeHead(200);
        res.end(JSON.stringify(dataStore));
      } else if (method === "post") {
        const newItem = JSON.parse(buffer);
        dataStore.push(newItem);
        res.writeHead(201);
        res.end(JSON.stringify(newItem));
      } else if (method === "put") {
        const id = parsedUrl.query.id;
        const updatedItem = JSON.parse(buffer);
        dataStore = dataStore.map((item) =>
          item.id === id ? updatedItem : item
        );
        res.writeHead(200);
        res.end(JSON.stringify(updatedItem));
      } else if (method === "delete") {
        const id = parsedUrl.query.id;
        dataStore = dataStore.filter((item) => item.id !== id);
        res.writeHead(200);
        res.end(JSON.stringify({ message: "Item deleted" }));
      } else {
        res.writeHead(405);
        res.end(JSON.stringify({ error: "Method not allowed" }));
      }
    });
  });

  const PORT = 3000;
  server.listen(PORT, () => {
    console.log(`API server is running on http://localhost:${PORT}`);
  });
}

// createRestApiServer();

// -----------------------------------------------------------------------------------------------------------------------------
// 17.Create a Node.js script that uploads a file to a remote server using the `http` module or a package like `axios`.
function uploadFile() {
  const form = new FormData();
  form.append("file", fs.createReadStream("path/to/file.txt"));

  axios
    .post("https://example.com/upload", form, {
      headers: form.getHeaders(),
    })
    .then((response) => {
      console.log("File uploaded successfully:", response.data);
    })
    .catch((error) => {
      console.error("Error uploading file:", error);
    });
}

// uploadFile();

// -----------------------------------------------------------------------------------------------------------------------------
// 18.Create a basic in-memory key-value store in Node.js that supports `set`, `get`, and `delete` operations.
const store = {};

function set(key, value) {
  store[key] = value;
}

function get(key) {
  return store[key] || null;
}

function remove(key) {
  delete store[key];
}

set("name", "Alice");
console.log(get("name")); // Alice
remove("name");
console.log(get("name")); // null

// -----------------------------------------------------------------------------------------------------------------------------
// 19.Create a Node.js program that reads a large file in chunks to prevent memory overload.
function readLargeFile() {
  const stream = fs.createReadStream("largefile.txt", {
    encoding: "utf8",
    highWaterMark: 1024,
  });

  stream.on("data", (chunk) => {
    console.log("Reading chunk: ", chunk);
  });

  stream.on("end", () => {
    console.log("Finished reading file");
  });

  stream.on("error", (err) => {
    console.error("Error reading file:", err);
  });
}

// readLargeFile();

// -----------------------------------------------------------------------------------------------------------------------------
// 20.Implement a Node.js script to check if a file or directory exists.
function checkIfExists(path) {
  fs.exists(path, (exists) => {
    console.log(`${path} exists: ${exists}`);
  });
}

// checkIfExists("path/to/file-or-dir");

// -----------------------------------------------------------------------------------------------------------------------------
// 21.Write a script that tracks the response time of an HTTP request.
function trackResponseTime() {
  const start = Date.now();

  http.get("http://example.com", (res) => {
    res.on("data", () => {});
    res.on("end", () => {
      const duration = Date.now() - start;
      console.log(`Response time: ${duration}ms`);
    });
  });
}

// trackResponseTime();

// -----------------------------------------------------------------------------------------------------------------------------
// 22.Create a program that parses a URL and extracts its components (e.g., protocol, hostname, path).

function parseUrl() {
  const myUrl = "https://www.example.com/path?name=JohnDoe&age=30#section";
  const parsedUrl = url.parse(myUrl, true);

  console.log("Protocol:", parsedUrl.protocol);
  console.log("Hostname:", parsedUrl.hostname);
  console.log("Path:", parsedUrl.pathname);
  console.log("Query:", parsedUrl.query);
}

// parseUrl();

// -----------------------------------------------------------------------------------------------------------------------------
// 23.Build a Node.js script that sends an email using the `nodemailer` package.

async function sendEmail() {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your-email@gmail.com",
      pass: "your-email-password",
    },
  });

  const mailOptions = {
    from: "your-email@gmail.com",
    to: "recipient@example.com",
    subject: "Test Email",
    text: "This is a test email.",
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

// sendEmail();

// -----------------------------------------------------------------------------------------------------------------------------
// 24.Write a Node.js program to create a server that handles file uploads.
function uploadFileHandler() {
  const server = http.createServer((req, res) => {
    if (req.method === "POST") {
      const form = new formidable.IncomingForm();
      form.parse(req, (err, fields, files) => {
        if (err) {
          res.writeHead(400, { "Content-Type": "text/plain" });
          res.end("Error uploading file");
        } else {
          console.log("Uploaded file:", files.uploadFile);
          res.writeHead(200, { "Content-Type": "text/plain" });
          res.end("File uploaded successfully");
        }
      });
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`
        <form action="/" method="POST" enctype="multipart/form-data">
          <input type="file" name="uploadFile">
          <button type="submit">Upload</button>
        </form>
      `);
    }
  });

  const PORT = 3000;
  server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

// uploadFileHandler();

// -----------------------------------------------------------------------------------------------------------------------------
// 25.Build a small HTTP server that serves dynamic content based on the URL path (e.g., "/home", "/about").
function createDynamicServer() {
  const server = http.createServer((req, res) => {
    const url = req.url;
    res.writeHead(200, { "Content-Type": "text/plain" });

    if (url === "/home") {
      res.end("Welcome to Home Page");
    } else if (url === "/about") {
      res.end("This is the About Page");
    } else {
      res.end("Page not found");
    }
  });

  const PORT = 3000;
  server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

// createDynamicServer();

// -----------------------------------------------------------------------------------------------------------------------------
// 26.Create a program that reads data from a file, processes it, and then writes the result back to another file.
function readProcessWrite() {
  fs.readFile("input.txt", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }

    const processedData = data.toUpperCase(); // Example processing: convert to uppercase

    fs.writeFile("output.txt", processedData, (err) => {
      if (err) {
        console.error("Error writing to file:", err);
      } else {
        console.log("Data written to output.txt");
      }
    });
  });
}

// readProcessWrite();

// -----------------------------------------------------------------------------------------------------------------------------
// 27.Write a Node.js function that implements a basic promise-based delay or sleep function.
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runWithDelay() {
  console.log("Starting...");
  await delay(2000); // 2 seconds delay
  console.log("After delay");
}

// runWithDelay();

// -----------------------------------------------------------------------------------------------------------------------------
// 28.Create a Node.js script to implement a custom EventEmitter and handle custom events.
const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("event", () => {
  console.log("An event has occurred!");
});

myEmitter.emit("event");

// -----------------------------------------------------------------------------------------------------------------------------
// 29.Write a program that calculates and logs the total size of all files in a directory recursively.
let totalSize = 0;

function calculateTotalSize(dir) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      return;
    }
    files.forEach((file) => {
      const filePath = path.join(dir, file);
      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error("Error getting stats:", err);
          return;
        }
        if (stats.isDirectory()) {
          calculateTotalSize(filePath); // Recursive call for subdirectories
        } else {
          totalSize += stats.size;
        }
      });
    });
  });
}

// calculateTotalSize("./"); // Start from the root directory

// -----------------------------------------------------------------------------------------------------------------------------
// 30.Create a simple rate limiter in Node.js to restrict the number of requests from the same IP address.
const rateLimit = {};

function rateLimiter(req, res) {
  const ip = req.connection.remoteAddress;

  if (!rateLimit[ip]) {
    rateLimit[ip] = { count: 0, lastRequest: Date.now() };
  }

  const currentTime = Date.now();
  const timeDifference = currentTime - rateLimit[ip].lastRequest;

  if (timeDifference > 60000) {
    rateLimit[ip].count = 0;
  }

  if (rateLimit[ip].count >= 5) {
    res.writeHead(429, { "Content-Type": "text/plain" });
    res.end("Too many requests. Try again later.");
  } else {
    rateLimit[ip].count++;
    rateLimit[ip].lastRequest = currentTime;
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Request accepted");
  }
}

const server = http.createServer(rateLimiter);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// -----------------------------------------------------------------------------------------------------------------------------
