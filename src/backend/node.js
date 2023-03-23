const express = require("express");
const store = require("./databse.js");

const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors({ origin: "*" }));

const mongoose = require("mongoose").MongoClient;
let url = "mongodb://localhost:27017/Base";

app.get("/Base", async (req, res) => {
  const result = await store.find();
  console.log("output", result);
  res.send(result);
});

// app.get("/Base", cors(), (req, res) => {});

app.post("/Base", async (req, res) => {
  const { firstName, lastName, email,feedback } = req.body;
  const result = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    feedback,feedback
  };
  try {
    console.log("post result", result);
    await store.insertMany(result);
    res.send("data stored");
  } catch (error) {
    res.send("data not stored");
    console.log(error);
  }
});
app.listen(8007, () => {
  console.log("port connected");
});
