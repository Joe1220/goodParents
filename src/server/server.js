const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const helmet = require('helmet');
const session = require('cookie-session');

const port = parseInt(process.env.PORT) || 3001;

const UsersRouter = require("./routes/users");
const ProductsRouter = require("./routes/products");
const LoginRouter = require("./routes/login");

const app = express();
// 바디파서 연결
app.use(bodyParser.json());
// Helmet을 이용하면 HTTP 헤더를 적절히 설정하여 몇 가지 잘 알려진 웹 취약성으로부터 앱을 보호할 수 있다.
app.use(helmet());
// X-Powered-By 헤더는 사용하지 않도록 설정
app.disable('x-powered-by');
// 쿠키 설정
const expiryDate = new Date( Date.now() + 60 * 60 * 1000 ); // 1 hour
app.use(session({
  name: 'session',
  keys: ['key1', 'key2'],
  cookie: { secure: true,
            httpOnly: true,
            domain: 'http://localhost:3001',
            path: '/',
            expires: expiryDate
          }
  })
);
// 몽고디비 커넥션
mongoose
  .connect("mongodb://localhost:27017/goodparents")
  .then(() => {
    console.log("connected mongodb");
  })
  .catch(() => {
    console.error("DB connect error");
  });

// 라우팅 연결
app.use("/users", UsersRouter);
app.use("/products", ProductsRouter);
app.use("/login", LoginRouter);

app.listen(port, () => {
  console.log("App listening on port " + port);
});
