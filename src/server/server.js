const express = require("express");
const mongoose = require("mongoose");

const UsersRouter = require("./routes/users");
const ProductsRouter = require("./routes/products");

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

app.listen(3001, () => console.log("Example app listening on port 3001"));
