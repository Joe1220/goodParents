const express = require("express");
const path = require("path");
const app = express();
const build = path.join(__dirname, "build");
const port = process.env.PORT || 3000;

app.use("/", express.static(build));

app.get("/*", function(req, res) {
  res.sendFile(build + "/index.html", function(error) {
    if (error) res.status(500).send(error);
  });
});

app.listen(port, () => {
  console.log("App listening port " + port);
});
