const dotenv = require("dotenv");
const express = require("express");
// express is the 3rd party code that we are "requiring" - aka importing.
// require takes an argument. It will assume that you are looking in the node_modules folder.
// if you include ./ before the path (in this case express), it will search the root directory of your project.
// node_modules is always used by npm, and npm is the usual way of getting 3rd party software in JavasScript.
// require is usually a way to access a variable that is defined in another file.
dotenv.config()
//loads our .env file to give us access to it.
const app = express();
app.use(express.static("public"));
// this is specialist syntax to get express work properly.
const port = process.env.PORT;
app.listen(port,()=>console.log("listening"));

console.log(
    "server is running"
);