require("dotenv").config();
const mongoose = require("mongoose");

const ConnectDb = () => {
  mongoose.connect(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function () {
    // we're connected
    console.log("db connected sucessfully");
  });
};

module.exports = ConnectDb