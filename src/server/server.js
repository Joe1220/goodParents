const express = require("express");
const mongoose = require("mongoose");

const UsersRouter = require("./routes/users");
const ProductsRouter = require("./routes/products");
const LoginRouter = require("./routes/login");

const app = express();

mongoose.connect('mongodb://localhost:27017/users')
  .then(()=>{
    console.log('connected mongodb')
  })
  .catch(()=>{
    console.error('error');
  })

app.get("/users", UsersRouter);
app.get("/products", ProductsRouter);
app.get("/login", LoginRouter);

app.listen(3001, () => console.log("Example app listening on port 3001"));
