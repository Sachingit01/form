const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/Base")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch(() => {
    console.log("failed to connect");
  });
const NewSchema = new mongoose.Schema({
  firstName: {
    type: String,
    // required: true,
  },
  lastName: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    // required: true,
  },
 
  feedback: {
    type: String
  },
});

const store = new mongoose.model("store", NewSchema);

module.exports = store;
