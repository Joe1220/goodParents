const express = require('express');
const path = require('path');
const app = express();
const build = path.join(__dirname, 'build');

app.use(express.static(build));

app.get('/', function (req, res) {
  res.sendFile(build + '/index.html');
});

app.listen(process.env.PORT);
