const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

dotenv.config({ path: "./config.env" });
require("./db/conn");
// const User = require("./model/userSchema");

app.use(express.json());

// we link the router file
app.use(require("./router/auth"));

const PORT = process.env.PORT;

// Middleware
// const middleware = (req, res, next) => {
//   console.log(`Hello my middleware`);
//   next();
// };

// app.get("/", (req, res) => {
//   res.send(`Hello world from the server server.js`);
// });

// app.get("/about", (req, res) => {
//   console.log(`this is about middelware`);
//   res.send(`Hello about world from the server`);
// });

app.get("/contact", (req, res) => {
  res.send(`Hello contact  world from the server`);
});

// app.get("/signin", (req, res) => {
//   res.send(`Hello signin world from the server`);
// });

app.get("/signup", (req, res) => {
  res.send(`Hello signup  world from the server`);
});

app.listen(PORT, () => {
  console.log(`server is running at port no ${PORT}`);
});
