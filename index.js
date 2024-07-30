// imports the express npm module
const express = require("express");

// imports the cors npm module
const cors = require("cors");

// imports the Pool object from the pg npm module, specifically
// const Pool = require("pg").Pool;

// This creates a new connection to our database. Postgres listens on port 5432 by default
// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "todo_app_db",
//   password: "postgres",
//   port: 5432,
// });
const todos = [{ title: "Buy Milk" }, { title: "Buy Eggs" }];
// Creates a new instance of express for our app
const app = express();

// .use is middleware - something that occurs between the request and response cycle.
app.use(cors());

// We will be using JSON objects to communcate with our backend, no HTML pages.
app.use(express.json());

// This route will return 'Hi There' when you go to localhost:3001/ in the browser
app.get("/", (req, res) => {
  res.send("Hi There");
});

app.get("/api/todos", (request, response) => {
  response.status(200).json(todos);
});

app.post("/api/todos", (request, response) => {
//   const { title, done } = request.body;

//   pool.query(
//     "INSERT INTO todos (title, done) VALUES ($1, $2) RETURNING *",
//     [title, done],
//     (error, results) => {
//       if (error) throw error;
//       console.log(results);
    todos.push(request.body)
    response.status(201).json(todos);
//     }
//   );
});

// This tells the express application to listen for requests on port 3001
app.listen("3001", () => {});
