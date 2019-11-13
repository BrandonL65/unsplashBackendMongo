let express = require("express");
let app = express();
let fetch = require("node-fetch");
let cors = require("cors");
let PORT = process.env.PORT || 5000;
let searchControls = require("./controller/searchController.js");
require("dotenv").config();


//Middleware 
app.use(express.json());
app.use(cors());

//routes 
app.get("/random", searchControls.random);
app.get("/search", searchControls.search);

//start server
app.listen(5000, () => {
  console.log("LISTENING ON PORT 5000")
});