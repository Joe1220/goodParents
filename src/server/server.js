const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");

const port = process.env.PORT || 3001;
const mongoPort = process.env.MONGOPORT || 27017;

const UsersRouter = require("./routes/users");
const ProductsRouter = require("./routes/products");
const LoginRouter = require("./routes/login");

// 익스프래스 연결
const app = express();
// 바디파서 연결
app.use(bodyParser.json());
// Helmet을 이용하면 HTTP 헤더를 적절히 설정하여 몇 가지 잘 알려진 웹 취약성으로부터 앱을 보호할 수 있다.
app.use(helmet());
// X-Powered-By 헤더는 사용하지 않도록 설정
app.disable("x-powered-by");
// 쿠키파서 미들웨어 연결
app.use(cookieParser());
// 몽고디비 커넥션
mongoose
  .connect(`mongodb://mongodb:${mongoPort}/goodParents`)
  .then(() => {
    console.log("mongodb connected.");
  })
  .catch(() => {
    console.error("DB connect error. Exit.");
    process.exit(1);
  });

// 라우팅 연결
app.use("/api/users", UsersRouter);
app.use("/api/products", ProductsRouter);
app.use("/api/login", LoginRouter);

app.listen(port, () => {
  console.log("App listening on port " + port);
});
