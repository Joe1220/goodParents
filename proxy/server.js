const express = require("express");
const proxy = require("http-proxy-middleware");

const port = process.env.PORT || 80;
const frontPort = process.env.FRONTPORT || 3000;
const apiPort = process.env.APIPORT || 3001;

const app = express();

app.use(proxy("/api", {
  target: `http://back:${apiPort}`,
  changeOrigin: true,
}));

app.use(proxy("/", {
  target: `http://front:${frontPort}`,
  changeOrigin: true,
}));

app.listen(port, () => {
  console.log("App listening port " + port);
});
