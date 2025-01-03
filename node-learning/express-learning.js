// EXPRESS JS:
// Required Imports
const fs = require("fs");
const express = require("express");
const multer = require("multer");
const cors = require("cors");
const session = require("express-session");
const axios = require("axios");
const path = require("path");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

// Initialize Express app
const app = express();

// Middleware setup
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({ secret: "secretKey", resave: false, saveUninitialized: true })
);

// -----------------------------------------------------------------------------------------------------------------------------
// 1.Create a basic Express.js server that responds with "Hello World" to all requests.
function helloWorld() {
  app.get("*", (req, res) => {
    res.send("Hello World");
  });
}

// -----------------------------------------------------------------------------------------------------------------------------
// 2.Build a simple Express app that handles GET and POST requests, logging the request method and URL.
function logRequestMethodAndUrl() {
  app.get("/", (req, res) => {
    console.log(`${req.method} request made to ${req.url}`);
    res.send("GET Request");
  });

  app.post("/", (req, res) => {
    console.log(`${req.method} request made to ${req.url}`);
    res.send("POST Request");
  });
}

// -----------------------------------------------------------------------------------------------------------------------------
// 3.Create a REST API with CRUD operations (Create, Read, Update, Delete) using Express and an in-memory array.
let users = [];

function crudOperations() {
  // Create
  app.post("/users", (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).json(user);
  });

  // Read
  app.get("/users", (req, res) => {
    res.status(200).json(users);
  });

  // Update
  app.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const updatedUser = req.body;
    users = users.map((user) => (user.id === id ? updatedUser : user));
    res.status(200).json(updatedUser);
  });

  // Delete
  app.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.status(204).send();
  });
}

// -----------------------------------------------------------------------------------------------------------------------------
// 4.Build an Express application that serves static files (e.g., images, CSS, JavaScript) from a directory.
function serveStaticFiles() {
  app.use(express.static(path.join(__dirname, "public")));
}

// -----------------------------------------------------------------------------------------------------------------------------
// 5.Create an Express middleware that logs the request details (method, URL, timestamp) for every request.
function logRequestDetails() {
  app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
  });
}

// -----------------------------------------------------------------------------------------------------------------------------
// 6.Build a login API using POST and implement basic input validation (e.g., username and password).
function loginAPI() {
  app.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).send("Username and password are required");
    }
    res.status(200).send("Login Successful");
  });
}

// -----------------------------------------------------------------------------------------------------------------------------
// 7.Create an Express.js route that returns data in JSON format.
function jsonResponseRoute() {
  app.get("/data", (req, res) => {
    const data = { message: "This is a JSON response" };
    res.json(data);
  });
}

// -----------------------------------------------------------------------------------------------------------------------------
// 8.Implement an Express.js API with query parameters to fetch data based on filters (e.g., `?category=tech`).
function queryParamFilter() {
  app.get("/products", (req, res) => {
    const category = req.query.category;
    const products = [
      { id: 1, name: "Product 1", category: "tech" },
      { id: 2, name: "Product 2", category: "fashion" },
    ];
    const filteredProducts = products.filter((p) => p.category === category);
    res.json(filteredProducts);
  });
}

// -----------------------------------------------------------------------------------------------------------------------------
// 9.Build a simple authentication system with JWT (JSON Web Tokens) to secure your routes.
function jwtAuthentication() {
  app.post("/login", (req, res) => {
    const { username } = req.body;
    const token = jwt.sign({ username }, "secretKey", { expiresIn: "1h" });
    res.json({ token });
  });

  app.get("/protected", verifyToken, (req, res) => {
    res.send("Protected Route");
  });

  function verifyToken(req, res, next) {
    const token = req.headers["authorization"];
    if (!token) return res.status(403).send("Token required");
    jwt.verify(token, "secretKey", (err, decoded) => {
      if (err) return res.status(500).send("Failed to authenticate token");
      req.user = decoded;
      next();
    });
  }
}

// -----------------------------------------------------------------------------------------------------------------------------
// 10.Create a form handling route that parses form data from a POST request and returns the data in JSON format.
function formHandling() {
  app.post("/form", (req, res) => {
    const formData = req.body;
    res.json(formData);
  });
}

// -----------------------------------------------------------------------------------------------------------------------------
// 11.Create an Express.js application that integrates with a database (e.g., MongoDB or MySQL).
const mongoose = require("mongoose");

function dbIntegration() {
  mongoose
    .connect("mongodb://localhost:27017/mydb", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Failed to connect to MongoDB", err));

  const userSchema = new mongoose.Schema({
    name: String,
    email: String,
  });

  const User = mongoose.model("User", userSchema);

  app.post("/users", async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  });

  app.get("/users", async (req, res) => {
    const users = await User.find();
    res.json(users);
  });
}

// -----------------------------------------------------------------------------------------------------------------------------
// 12.Implement error handling middleware to catch errors and return proper HTTP status codes with error messages.
function errorHandlingMiddleware() {
  app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  });
}

// -----------------------------------------------------------------------------------------------------------------------------
// 13.Create an Express.js application that serves a dynamic HTML page (e.g., rendering a list of users).
function dynamicHtmlPage() {
  app.get("/users", (req, res) => {
    const users = ["Alice", "Bob", "Charlie"];
    let html = "<ul>";
    users.forEach((user) => (html += `<li>${user}</li>`));
    html += "</ul>";
    res.send(html);
  });
}

// -----------------------------------------------------------------------------------------------------------------------------
// 14.Create a POST route that accepts JSON data and saves it to a file or database.
function saveDataToFile() {
  app.post("/save", (req, res) => {
    const data = req.body;
    fs.writeFileSync("data.json", JSON.stringify(data));
    res.status(200).send("Data saved");
  });
}

// -----------------------------------------------------------------------------------------------------------------------------
// 15.Create a route that supports file uploads using the `multer` middleware.
const upload = multer({ dest: "uploads/" });

function fileUpload() {
  app.post("/upload", upload.single("file"), (req, res) => {
    res.send("File uploaded successfully");
  });
}

// -----------------------------------------------------------------------------------------------------------------------------
// 16.Write an Express.js API that handles user registration and validation of email format.
function userRegistration() {
  app.post("/register", (req, res) => {
    const { email } = req.body;
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return res.status(400).send("Invalid email format");
    }
    res.status(201).send("User registered");
  });
}

// -----------------------------------------------------------------------------------------------------------------------------
// 17.Create a route that implements pagination for returning a limited number of results.
function paginationRoute() {
  app.get("/items", (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
    const paginatedItems = items.slice((page - 1) * limit, page * limit);
    res.json(paginatedItems);
  });
}

// -----------------------------------------------------------------------------------------------------------------------------
// 18.Build an Express application that logs all HTTP requests using middleware.
function logAllRequests() {
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });
}

// -----------------------------------------------------------------------------------------------------------------------------
// 19.Create a session management system using Express and `express-session`.
function sessionManagement() {
  app.get("/login", (req, res) => {
    req.session.user = { username: "john_doe" };
    res.send("Logged in");
  });

  app.get("/profile", (req, res) => {
    if (!req.session.user) return res.status(401).send("Not authenticated");
    res.send("Profile page");
  });
}

// -----------------------------------------------------------------------------------------------------------------------------
// 20.Create an Express.js app that handles CORS (Cross-Origin Resource Sharing) for different origins.
function corsHandling() {
  app.use(cors({ origin: "http://example.com" }));
}

// -----------------------------------------------------------------------------------------------------------------------------
// 21.Build a simple to-do app with Express.js that allows adding, updating, and deleting tasks.
let tasks = [];

function todoApp() {
  app.post("/tasks", (req, res) => {
    const task = req.body;
    tasks.push(task);
    res.status(201).json(task);
  });

  app.get("/tasks", (req, res) => {
    res.json(tasks);
  });

  app.delete("/tasks/:id", (req, res) => {
    const { id } = req.params;
    tasks = tasks.filter((task) => task.id !== id);
    res.status(204).send();
  });
}

// -----------------------------------------------------------------------------------------------------------------------------
// 22.Create an Express.js route to fetch data from a remote API (using `axios` or `fetch`).
function fetchRemoteData() {
  app.get("/external", async (req, res) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      res.json(response.data);
    } catch (err) {
      res.status(500).send("Error fetching data");
    }
  });
}

// -----------------------------------------------------------------------------------------------------------------------------
// 23.Create a route that performs input sanitization to prevent XSS (Cross-site Scripting) attacks.
function inputSanitization() {
  const escapeHtml = (str) =>
    str.replace(
      /[&<>"']/g,
      (match) =>
        `&${
          {
            "&": "amp",
            "<": "lt",
            ">": "gt",
            '"': "quot",
            "'": "apos",
          }[match]
        };`
    );

  app.post("/submit", (req, res) => {
    const sanitizedInput = escapeHtml(req.body.input);
    res.json({ sanitizedInput });
  });
}

// -----------------------------------------------------------------------------------------------------------------------------
// 24.Create an Express.js app that connects to a database (MongoDB, PostgreSQL) and handles CRUD operations.
function crudWithDatabase() {
  // Implement database interaction (as done in Q11)
}

// -----------------------------------------------------------------------------------------------------------------------------
// 25.Implement an Express middleware to authenticate users with a token from the request headers.
function authenticateWithToken() {
  app.use((req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) return res.status(403).send("Token required");
    jwt.verify(token, "secretKey", (err, decoded) => {
      if (err) return res.status(500).send("Failed to authenticate token");
      req.user = decoded;
      next();
    });
  });
}

// -----------------------------------------------------------------------------------------------------------------------------
// 26.Build a route to update user details (e.g., username, email) using PUT or PATCH requests.
function updateUserDetails() {
  app.put("/user/:id", (req, res) => {
    const { id } = req.params;
    const updatedUser = req.body;
    res.status(200).json({ id, updatedUser });
  });
}

// -----------------------------------------------------------------------------------------------------------------------------
// 27.Create an Express route that serves a dynamically generated JSON response based on request parameters.
function dynamicJsonResponse() {
  app.get("/data/:param", (req, res) => {
    const param = req.params.param;
    res.json({ message: `You sent ${param}` });
  });
}

// -----------------------------------------------------------------------------------------------------------------------------
// 28.Build a 404 error page using Express for handling unrecognized routes.
function notFoundPage() {
  app.use((req, res) => {
    res.status(404).send("Page not found");
  });
}

// -----------------------------------------------------------------------------------------------------------------------------
// 29.Create an Express.js app that supports rate-limiting to prevent excessive API calls.
const rateLimit = require("express-rate-limit");

function rateLimitAPI() {
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "Too many requests, please try again later.",
  });
  app.use(limiter);
}

// -----------------------------------------------------------------------------------------------------------------------------
// 30.Build an API that uses Express and JWT for user authentication and protects certain routes with JWT verification.
function jwtProtectedRoutes() {
  app.get("/private", verifyToken, (req, res) => {
    res.send("This is a private route");
  });

  function verifyToken(req, res, next) {
    const token = req.headers["authorization"];
    if (!token) return res.status(403).send("Token required");
    jwt.verify(token, "secretKey", (err, decoded) => {
      if (err) return res.status(500).send("Failed to authenticate token");
      req.user = decoded;
      next();
    });
  }
}

// -----------------------------------------------------------------------------------------------------------------------------

// Start Express server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
