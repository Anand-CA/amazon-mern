require("dotenv").config();
const express = require("express");
const cors = require("cors");
const ConnectDb = require("./config/db");
const Products = require("./models/Product");
const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());
app.use(cors());

ConnectDb();

app.get("/", (req, res) => {
  res.send("server is working 💯");
});

app.get("/api/products", (req, res) => {
  Products.find((err, data) => {
    if (err) {
      alert(err);
    } else {
      res.send(data);
    }
  });
});

app.post("/api/product", (req, res) => {
  Products.create(req.body, (err, data) => {
    if (err) {
      alert(err);
    } else {
      res.send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
