const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const UsersRouter = require("./routes/users");
const ProductsRouter = require("./routes/products");
const LoginRouter = require("./routes/login");

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/goodparents')
  .then(()=>{
    console.log('connected mongodb')
  })
  .catch(()=>{
    console.error('error');
  })

app.use("/users", UsersRouter);
app.use("/products", ProductsRouter);
app.use("/login", LoginRouter);

app.listen(3001, () => console.log("Example app listening on port 3001"));
