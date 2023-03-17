const express = require("express");
const store = require("./database.jsx");

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


app.get("/Base", (req, res) => {
  console.log(hi);
  store.find({}, (err, data) => {
    if (err) throw err;
    res.send(data);
    console.log(data);
    console.log(hi);
  });
});

// app.get("/Storage", cors(), (req, res) => {});

// app.post("/Base", (req, res) => {
//   const result = req.body;
//   // const store = new store(result);
//   store
//     .save()
//     .then(() => {
//       res.send("item saved to database");
//     })
//     .catch((err) => {
//       res.status(400).send("unable to save");
//     });
// });

// try {
//   await  data.save()
//   res.send("item saved to database");
//   res.send("form submitted");
// } catch (err) {
//   res.status(400).send("unable to save to database");
// }

app.listen(8007, () => {
  console.log("port connected");
});
