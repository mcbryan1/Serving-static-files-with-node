//Setting Up Express
const express = require("express");
const path = require("path");
const server = express();

//Middleware
server.use(express.static(path.join(__dirname, "public")));

//Request Handling

//Routes

//Listening To Server
server.listen(3001, () => console.log("Server Is Ready For Any Request"));
