const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 1000;
const app = express();
const jwt = require("jsonwebtoken");

// middleware
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("SB running");
});

app.listen(port, () => {
  console.log("SB running on", port);
});