const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3001;

const UsersRouter = require("./routes/users");
const ProductsRouter = require("./routes/products");
const LoginRouter = require("./routes/login");

const app = express();
app.use(bodyParser.json());

mongoose
  .connect("mongodb://goodparents_mongodb_1:27017/goodParents")
  .then(() => {
    console.log("connected mongodb");
  })
  .catch(() => {
    console.error("DB connect error");
  });

app.use("/api/users", UsersRouter);
app.use("/api/products", ProductsRouter);
app.use("/api/login", LoginRouter);

app.listen(port, () => {
  console.log("App listening on port " + port);
});
