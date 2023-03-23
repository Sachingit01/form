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
let url = "mongodb+srv://sachinsatheesh:974747635035@cluster.ik2a6rc.mongodb.net/?retryWrites=true&w=majority/Data";

app.get("/Data", async (req, res) => {
  try {
    const result = await collections.find();
    console.log("output", result);
    res.send(result);
  } catch (error) {
    res.send("get error");
    console.log(error);
  }
});

// app.get("/Base", cors(), (req, res) => {});

app.post("/Data", async (req, res) => {
  const { firstName, lastName, email } = req.body;
  const result = {
    firstName: firstName,
    lastName: lastName,
    email: email,
  };
 try {
    console.log("post result", result);
    await collections.insertMany(result);
    res.send("data stored");
  } catch (error) {
    res.send("data not stored");
    console.log(error);
  }
});
app.listen(8007, () => {
  console.log("port connected");
});



