const express = require("express");
const mongoose = require("mongoose");
const port = parseInt(process.env.PORT) || 3001;

const UsersRouter = require("./routes/users");
const ProductsRouter = require("./routes/products");

const app = express();

mongoose
  .connect("mongodb://services:27017/goodParents")
  .then(() => {
    console.log("connected mongodb");
  })
  .catch(() => {
    console.error("DB connect error");
  });

app.get("/users", UsersRouter);
app.get("/products", ProductsRouter);

app.listen(port, () => {
  console.log("App listening on port " + port);
});
