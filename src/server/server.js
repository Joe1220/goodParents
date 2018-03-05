const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");

const port = process.env.PORT || 3001;
const mongoPort = process.env.MONGOPORT || 27017;

const UsersRouter = require("./routes/users");
const ProductsRouter = require("./routes/products");
const AuthRouter = require("./routes/auth");
const AuthMiddleware = require("./middleware/auth");

// jwt config
const config = require("./config");
// 익스프레스 연결
const app = express();
// 바디파서 연결
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// set the secret key variable for jwt
app.set("jwt-secret", config.secret);
// Helmet을 이용하면 HTTP 헤더를 적절히 설정하여 몇 가지 잘 알려진 웹 취약성으로부터 앱을 보호할 수 있다.
app.use(helmet());
// X-Powered-By 헤더는 사용하지 않도록 설정
app.disable("x-powered-by");
// 쿠키파서 미들웨어 연결
app.use(cookieParser(config.secret));
// 몽고디비 커넥션
// mongoose
//   .connect(`mongodb://goodParents:abc123@mongodb:${mongoPort}/goodParents`)
//   .then(() => {
//     console.log("mongodb connected.");
//   })
//   .catch(() => {
//     console.error("DB connect error. Exit.");
//     process.exit(1);
//   });
mongoose
  .connect(`mongodb://localhost:27017/goodparents`)
  .then(() => {
    console.log("mongodb connected.");
  })
  .catch(() => {
    console.error("DB connect error. Exit.");
    process.exit(1);
  });

// 라우팅 연결
app.use("/api/users", AuthMiddleware);
app.use("/api/users", UsersRouter);
app.use("/api/products", ProductsRouter);
app.use("/api/auth", AuthRouter);

app.listen(port, () => {
  console.log("App listening on port " + port);
});
