const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
var morgan = require('morgan')
// const cookiesMiddleware = require('universal-cookie-express');

const port = process.env.PORT || 3001;
// const mongoPort = process.env.MONGOPORT || 27017;

const UsersRouter = require("./routes/users");
const ProductsRouter = require("./routes/products");
const AuthRouter = require("./routes/auth");
const AuthMiddleware = require("./middleware/auth");
const CartRouter = require("./routes/cart");
const MypageRouter = require("./routes/mypage");
const PaymentRouter = require("./routes/payment");

// jwt config
const config = require("./config");
// 익스프레스 연결
const app = express();
const staticFiles = express.static(path.join(__dirname, '../../client/build'))
app.use(staticFiles)

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
app.use(morgan())
// 몽고디비 커넥션
mongoose.Promise = global.Promise;
mongoose
  .connect(`mongodb://joe1220:c159789c@ds131942.mlab.com:31942/goodparents`, { useNewUrlParser: true })
  .then(() => {
    console.log("mongodb connected.");
  })
  .catch(() => {
    console.error("DB connect error. Exit.");
    process.exit(1);
  });
// mongoose
//   .connect(`mongodb://localhost:27017/goodParents`)
//   .then(() => {
//     console.log("mongodb connected.");
//   })
//   .catch(() => {
//     console.error("DB connect error. Exit.");
//     process.exit(1);
//   });

// 라우팅 연결
app.use("/api/users", AuthMiddleware);
app.use("/api/users", UsersRouter);

app.use("/api/products", ProductsRouter);

app.use("/api/auth", AuthRouter);

app.use("/api/cart", AuthMiddleware);
app.use("/api/cart", CartRouter);

app.use("/api/mypage", AuthMiddleware);
app.use("/api/mypage", MypageRouter);

app.use("/api/payment", AuthMiddleware);
app.use("/api/payment", PaymentRouter);

// app.use("/foodPictures", express.static(path.join(__dirname, "foodPictures")));

// app.get("/api", (req, res) => {
//   res.send("api");
// });

// app.get("/api/api", (req, res) => {
//   res.send("apiapi");
// });

// app.get("/", (req, res) => {
//   res.send("test");
// });

app.use('/*', staticFiles)

app.listen(port, () => {
  console.log("App listening on port " + port);
});
